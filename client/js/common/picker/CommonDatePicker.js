/**
 * @flow
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Picker from 'react-native-picker';
import ModalPicker from './ModalPicker';

type Props = {

}
type State = {

}

export default class CommonDatePicker extends React.PureComponent<Props, State> {


  _createDateData() {
    const date = [];
    for(let i=1970;i<2020;i++){
        const month = [];
        for(let j = 1;j<13;j++){
            const day = [];
            if(j === 2){
                for(let k=1;k<29;k++){
                    day.push(k+'日');
                }
                //Leap day for years that are divisible by 4, such as 2000, 2004
                if(i%4 === 0){
                    day.push(29+'日');
                }
            } else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                for(let k=1;k<32;k++){
                    day.push(k+'日');
                }
            }
            else{
                for(let k=1;k<31;k++){
                    day.push(k+'日');
                }
            }
            const _month = {};
            _month[j+'月'] = day;
            month.push(_month);
        }
        const _date = {};
        _date[i+'年'] = month;
        date.push(_date);
    }
    console.log(date);
    return date;
  }

  /** 时间选择 */
  _showTimePicker() {
    const years = [],
        months = [],
        days = [],
        hours = [],
        minutes = [];

    for(let i=1;i<51;i++){
        years.push(i+1980);
    }
    for(let i=1;i<13;i++){
        months.push(i);
    }
    for(let i=0; i<24; i++) {
      if(i<10) {
        hours.push('0'+i);
      } else {
        hours.push(i);
      }
    }
    for(let i=1;i<32;i++){
        days.push(i);
    }
    for(let i=0;i<60;i++){
      if(i%15 === 0) {
        if(i === 0) {
          minutes.push('00');
        } else {
          minutes.push(i);
        }
      }
    }
    
    const pickerData = [years, months, days, hours, minutes];
    console.log('======');
    console.log(pickerData);
    const date = new Date();
    const selectedValue = [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDate(),
        date.getHours(),
        date.getMinutes()
    ];
    Picker.init({
        pickerData,
        selectedValue,
        pickerConfirmBtnText: '确定',
        pickerCancelBtnText: '取消',
        pickerTitleText: '选择用车时间',
        pickerConfirmBtnColor: [214, 60, 131, 1],
        pickerCancelBtnColor: [153, 153, 153, 1],
        pickerTitleColor: [102, 102, 102, 1],
        pickerToolBarBg: [255, 255, 255, 1],
        pickerBg: [255, 255, 255, 1],
        wheelFlex: [2, 1, 1, 2, 1, 1],
        onPickerConfirm: pickedValue => {
            console.log('area', pickedValue);
        },
        onPickerCancel: pickedValue => {
            console.log('area', pickedValue);
        },
        onPickerSelect: pickedValue => {
            const targetValue = [...pickedValue];
            if(parseInt(targetValue[1]) === 2){
                if(targetValue[0]%4 === 0 && targetValue[2] > 29){
                    targetValue[2] = 29;
                }
                else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
                    targetValue[2] = 28;
                }
            }
            else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
                targetValue[2] = 30;
            }
            // forbidden some value such as some 2.29, 4.31, 6.31...
            if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                // android will return String all the time，but we put Number into picker at first
                // so we need to convert them to Number again
                targetValue.map((v, k) => {
                    if(k !== 3){
                        targetValue[k] = parseInt(v);
                    }
                });
                Picker.select(targetValue);
                pickedValue = targetValue;
            }
        }
    });
    Picker.show();
}

    _show =() => {
        this.refs.modal.openModal();
    }

    _clear =() => {
        this.refs.view.setNativeProps({
            style: {
                backgroundColor: '#fff',
            },
        });
    }

  /** 展示日期选择器 */
  _showDatePicker =() => {
    // this.refs.modal.openModal();
    this._show();
    Picker.init({
        pickerData: this._createDateData(),
        pickerFontColor: [255, 0 ,0, 1],
        onPickerConfirm: (pickedValue, pickedIndex) => {
            console.warn('confirm');
        },
        onPickerCancel: (pickedValue, pickedIndex) => {
            console.warn('cancel');
        },
        onPickerSelect: (pickedValue, pickedIndex) => {
            console.warn('select');
        }
    });
    Picker.show();
  }

  render() {
    return (
      <View ref='view' style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._show}>
          <Text style={{ fontSize: 30 }}>日期选择</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._showTimePicker}>
          <Text style={{ fontSize: 30 }}>时间选择</Text>
        </TouchableOpacity>
        <ModalPicker ref={'modal'} />
      </View>
      
    );
  }

}
