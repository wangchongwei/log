import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Picker from 'react-native-picker';
import Moment from 'moment';

type Props = {
  defaultDate: string | Date; // 默认被选中日期
  format: 'YYYY-MM-DD HH:ss' | 'YYYY-MM-DD'; // 需要的日期格式
  onChangeDate: Function; // 当选中的时间改变;
  componentKey: string; // 组件的key值
}

type State = {
  isModalShow: boolean; // modal是否显示
}

export default class ModalDatePicker extends React.PureComponent<Props, State>{

    selectedValue : Array<string>;
    static defaultProps = {
      format: 'YYYY-MM-DD',
      componentKey: 'key',
      defaultDate: Moment(),
    }
    state = {
      isModalShow: false,
    }
    componentDidMount() {
      const { defaultDate } = this.props;
      this._setDefauleValue(defaultDate);
    }
    selectedValue = []

    /** picker init */
    _init =() => {
      Picker.init({
        pickerData: this._createDateData(),
        selectedValue: this.selectedValue,
        pickerFontColor: [255, 0 ,0, 1],
        pickerConfirmBtnText: '确定',
        pickerCancelBtnText: '取消',
        pickerTitleText: '选择用车时间',
        pickerConfirmBtnColor: [214, 60, 131, 1],
        pickerCancelBtnColor: [153, 153, 153, 1],
        pickerTitleColor: [102, 102, 102, 1],
        pickerToolBarBg: [255, 255, 255, 1],
        pickerBg: [255, 255, 255, 1],
        onPickerConfirm: this._onPickerConfirm,
        onPickerCancel: (pickedValue, pickedIndex) => {
            console.warn('cancel');
            this.closeModal();
        },
        onPickerSelect: (pickedValue, pickedIndex) => {
          console.warn('select');
        }
      });
    }

    /** 从选中的数据中获取日期 */
    _getDate =(pickedValue: Array<string>) => {
      const date = [];
      for(let i = 0; i < pickedValue.length; i ++) {
        const itemStr = pickedValue[i].toString().replace(/-|\/| |:|年|月|日|时|分/g, '');
        date.push(parseInt(itemStr));
      }
      const time = new Date(...date);
      // 因为Date生成的月份是按0开始取的，所以需要这里转换的时候需要提前一个月
      const moment = Moment(time).subtract(1, 'months');
      return moment;
    }

    /** 当点击确定 */
    _onPickerConfirm =(pickedValue: Array<string>, pickedIndex: array<number>) => {
      this.selectedValue = pickedValue;
      console.group('confirm');
      console.log(pickedValue);
      console.log(pickedIndex);
      console.groupEnd();
      const { componentKey, onChangeDate, format } = this.props;
      const date = this._getDate(pickedValue);
      console.log(date);
      const dateStr = date.format(format);
      console.log('======', dateStr);
      // 当所选时间变化时，回调函数
      onChangeDate && onChangeDate(dateStr, componentKey);
      this.closeModal();
    }

    /** 设置默认被选中的日期 */
    _setDefauleValue =(defaultValue: string | Date) => {
      const { format } = this.props;
      let dateStr ='';
      if(typeof(defaultValue) === 'string') {
        dateStr = defaultValue.toString();
      } else {
        // 当不为string类型时，则为date，date的format方法已经遗弃，只能用moment中的format
        dateStr = Moment(defaultValue).format(format);
        console.log('=====', dateStr);
      }
      dateStr = dateStr.replace(/-|\/| |:|年|月|日|时|分/g, '');

      const year = this._removeZero(dateStr.substring(0, 4)) + '年';
        const month = this._removeZero(dateStr.substring(4, 6)) + '月';
        const day = this._removeZero(dateStr.substring(6, 8)) + '日';
      if(dateStr.length === 8) {
        // 年月日
        this.selectedValue = [year, month, day];
      } else {
        // 年月日时分
        const hour = this._removeZero(dateStr.substring(8, 10)) + '时';
        const min = this._removeZero(dateStr.substring(10, 12)) + '分';
        this.selectedValue = [year, month, day, hour, min];
      }
    }

    /** 去除月份、日期、时、分前的0 */
    _removeZero =(str) => {
      if(str.length === 2 && str[0] === '0') {
        return str[1];
      }
      return str;
    }

    /** 构建picker的数据 */
    _createDateData() {
      const date = [];
      for(let i=1970;i<2020;i++){
          const month = [];
          for(let j = 1;j<13;j++){
              // 日
              const day = [];
              if(j === 2){
                  // 2月28天
                  for(let k=1;k<29;k++){
                    day.push(k+'日');
                  }
                  // 闰年29天
                  if(i%4 === 0){
                    day.push(29+'日');
                  }
              } else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                  // 大月31天
                  for(let k=1;k<32;k++){
                    day.push(k+'日');
                  }
              }
              else{
                  // 小月30天
                  for(let k=1;k<31;k++){
                    day.push(k+'日');
                  }
              }
              
              // 月
              const _month = {};
              _month[j+'月'] = day;
              month.push(_month);
          }
          // 总数据
          const _date = {};
          // 年
          _date[i+'年'] = month;
          date.push(_date);
      }
      console.log(date);
      return date;
    }

     /** 展示日期选择器 */
  _showDatePicker =() => {
    this._init();
    Picker.show();
  }

    /** 关闭modal */
    closeModal =() => {
      this.setState({ isModalShow: false });
      Picker.hide();
    }

    /** 显示modal */
    openModal =() => {
      this.setState({ isModalShow: true }, () => {
        this._showDatePicker();
      });
    }

    render(){
        return(
          <Modal
            transparent
            animationType={'fade'}
            style={{ flex: 1 }}
            onRequestClose={() => { console.log('modal时点击back') }}
            visible={this.state.isModalShow}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.closeModal}
              style={styles.container}
            />
          </Modal>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000033',
  },
});

