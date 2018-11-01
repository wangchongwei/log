/**
 * 限定时长的时间倒数器 只支持1小时以内
 * 时间倒数器
 */
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  tips: string; // 倒数时间结束后的提示语句
  duration: number; // 时长 以分钟为单位
  onEnd: Function; // 倒计时结束后执行的回调
}
type State = {
  date: string | number; // 显示的时长,
}
export default class CountDownTimer extends React.PureComponent<Props, State> {

  
  interval: Object;
  second: number; // 循环次数
  state = {
    date: '15 : 00',
  }
  componentDidMount() {
    this.interval = setInterval(()=> {
      this._setDate();
      this.second += 1;
    }, 1000);
  }

  componentWillUnmount() {
    this._stop();
  }

  interval = {}
  second = 0

  /** 获取时长 */
  _setDate =() => {
    const { duration, tips } = this.props;
    const allSecond = 60 * duration; // 获取总秒数
    const leftSecond = allSecond - this.second;
    const text = this._transSecondToMins(leftSecond);
    if(text) {
      this.setState({ date: text });
    } else {
      this.setState({ date: tips });
      this._stop();
    }
  }

  /** 将秒转换为分钟的显示 */
  _transSecondToMins =(second: number)=> {
    if(second) {
      if(second < 10) {
        return '0' + second;
      }
      if (second <= 60) {
        return second;
      }
      const mins = parseInt(second / 60);
      const sec = parseInt(second % 60);
      // 0分0秒
      if(mins === 0 && sec === 0) {
        return false;
      }
      if(sec === 0) {
        return mins + ' : 00';
      }
      if(sec < 10) {
        return mins + ' : 0' + sec;
      }
      return mins + ' : ' + sec;
    }
    return false;
  }

  /** 结束循环 */
  _stop =() => {
    const { tips, onEnd } = this.props;
    this.setState({ date: tips });
    onEnd && onEnd();
    clearInterval(this.interval);
  }

  render() {
    const { date } = this.state;
    return(
      <View><Text>{date}</Text></View>
    );
  }
}