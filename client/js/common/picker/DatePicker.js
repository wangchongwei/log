/**
 * @flow
 */
import React from 'react';
import { View, StyleSheet, Text, Modal, Dimensions, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import PickerScroll from './PickerScroll';

const { width } = Dimensions.get('window');
type Props = {
  title: string; // 标题
  onChangeDate: Function; // 选择时间的回调
  defaultDate: string | Date; // 默认被选中的日期
  yearDuration: number; // 年份跨度
  beginYear: number; // 起始年份
  minDate: string | Date; // 最小日期
  maxDate: string | Date; // 最大日期
}

type State = {
  showModal: boolean; // 是否展示时间选择的modal
}

export default class DatePicker extends React.PureComponent<Props, State>{

    params: {
      year: string; 
      month: string;
      day: string;
      hour: string;
      min: string;
    }

    static defaultProps = {
      defaultDate: new Date(),
    }

    state = {
      showModal: false,
    }

    componentDidMount() {
      // this._setDefaultDate();
    }

    params = {
      year: 2018,
      month: 11,
      day: 4,
      hour: '',
      min: '',
    }

    /** 设置默认被选中的值 */
    _setDefaultDate =() => {
      const { defaultDate } = this.props;
      if(typeof(defaultDate) === 'string') {
        console.log('string');
      } else {
        // 不是string 则为Date格式
        const year = defaultDate.getFullYear();
        const month = defaultDate.getMonth() + 1;
        const day = defaultDate.getDate();
        const hour = defaultDate.getHours();
        // const min = defaultDate.getMinutes();
        const min = 0;
        const obj = { year, month, day, hour, min };
        for (const key in this.params) {
          if (this.params.hasOwnProperty(key)) {
              if(this.params[key]){
                this.refs[key] && this.refs[key].setDefaultData(obj[key]);
              }            
          }
        }
      }
    }

    /** 打开modal */
    openModal = async () => {
      await this.setState({ showModal: true });
      this._setDefaultDate();
    }


    closeModal =() => {
      this.setState({ showModal: false });
    }

    /** 点击确定时 */
    _commit =() => {
      this.closeModal();
      console.log(this.params);
      const { onChangeDate } = this.props;
      onChangeDate && onChangeDate();
    }

  /** 当有选择条滚动时 */
  _onPickerChange =(componentKey, currentData, index) => {
    console.log(currentData);
    this.params[componentKey] = currentData;
  }
  
  /** 年 */
  _createYearDate =() => {
    const { beginYear, yearDuration } = this.props;
    const startYear = beginYear ? beginYear : new Date().getFullYear() - 1;
    const endYear = yearDuration ? startYear + yearDuration : startYear + 2;
    const year = [];
    for(let i = startYear; i <= endYear; i ++) {
      year.push(i);
    }
    return year;
  }

  /** 月份 */
  _createMonthDate =() => {
    const month = [];
    for(let i = 1; i < 13; i ++) {
      month.push(i);
    }
    return month;
  }

  /** 天 */
  _createDay =() => {
    const day = [];
    for(let i = 1; i < 32; i ++) {
      day.push(i);
    }
    return day;
  }

  /** 小时 */
  _createHour =() => {
    const hour = [];
    for(let i = 0; i < 24; i ++) {
      hour.push(i)
    }
    return hour;
  }

  render() {
    const { title } = this.props;
    return(
      <Modal
        ref={(ref) => { this.modal = ref; }}
        transparent
        animationType={'fade'}
        style={{ flex: 1 }}
        visible={this.state.showModal}
        onRequestClose={() => { this.setState({ showModal: false }); }}
      >
        <View
          style={{ flex: 1, backgroundColor: '#00000033' }}
        >
          <TouchableOpacity onPress={this.closeModal} style={{ flex: 1 }} />
          <View style={styles.commitiew}>
            <Text onPress={this.closeModal} style={styles.cancel}>取消</Text>
            <Text style={styles.titleText}>{title}</Text>
            <Text onPress={this._commit} style={styles.sure}>确定</Text>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.leftText}>年</Text>
            <Text style={styles.leftText}>月</Text>
            <Text style={styles.leftText}>日</Text>
            <Text style={styles.leftText}>时</Text>
            <Text style={styles.leftText}>分</Text>
          </View>
          <View style={styles.scroll}>
            <PickerScroll
              ref='year'
              style={styles.left}
              data={this._createYearDate()}
              componentKey={'year'}
              onPickerChange={this._onPickerChange}
            />
            <PickerScroll
              ref='month'
              style={styles.left}
              data={this._createMonthDate()}
              componentKey={'month'}
              onPickerChange={this._onPickerChange}
            />
            <PickerScroll
              ref='day'
              style={styles.left}
              data={this._createDay()}
              componentKey={'day'}
              onPickerChange={this._onPickerChange}
            />
            <PickerScroll
              ref='hour'
              style={styles.center}
              data={this._createHour()}
              componentKey={'hour'}
              onPickerChange={this._onPickerChange}
            />
            <PickerScroll
              ref='min'
              style={styles.right}
              data={[0, 15, 30, 45]}
              componentKey={'min'}
              onPickerChange={this._onPickerChange}
            />
          </View>
          <View style={styles.line} />
          <View style={[styles.line, { bottom: 120 }]} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    height: 160,
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 0,
  },
  left: {
    width: (width - 40) * 0.2,
  },
  center: {
    width: (width - 40) * 0.2,
  },
  right: {
    width: (width - 40) * 0.2,
  },
  titleView: {
    height: 28,
    width,
    backgroundColor: '#dddddd',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 160,
    paddingHorizontal: 20,
  },
  line: {
    height: 1,
    width,
    backgroundColor: '#DDDDDD',
    position: 'absolute',
    bottom: 80,
  },
  leftText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#999999',
    fontSize: 12,
    textAlign: 'center',
  },
  commitiew: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 46,
    width,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 188,
  },
  cancel: {
    color: '#999999',
    fontSize: 14,
    textAlign: 'left',
  },
  sure: {
    color: '#D63C83',
    textAlign: 'right',
    fontSize: 14,
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    color: '#666666',
    fontSize: 14,
  },
});
