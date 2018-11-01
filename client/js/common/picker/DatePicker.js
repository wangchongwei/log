/**
 * @flow
 */
import React from 'react';
import { View, StyleSheet, Text, Modal, Dimensions, TouchableOpacity } from 'react-native';
import PickerScroll from './PickerScroll';

const { width } = Dimensions.get('window');
type Props = {
  title: string; // 标题
  onChangeDate: Function; // 选择时间的回调
}

type State = {
  showModal: boolean; // 是否展示时间选择的modal
}

export default class DatePicker extends React.PureComponent<Props, State>{

    state = {
      showModal: false,
    }

    /** 打开modal */
    openModal =() => {
      this.setState({ showModal: true });
    }


    closeModal =() => {
      this.setState({ showModal: false });
    }

    /** 点击确定时 */
    _commit =() => {
      const { onChangeDate } = this.props;
      onChangeDate && onChangeDate();
    }
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
      if(i < 10) {
        hour.push('0' + i);
      } else {
        hour.push(i);
      }
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
            <Text style={styles.leftText}>日期</Text>
            <Text style={[styles.leftText, { flex: 3 }]}>时</Text>
            <Text style={[styles.leftText, { flex: 3 }]}>分</Text>
          </View>
          <View style={styles.scroll}>
            <PickerScroll
              style={styles.left}
              data={this._createDay()}
            />
            <PickerScroll
              style={styles.center}
              data={this._createHour()}
            />
            <PickerScroll
              style={styles.right}
              data={['00', 15, 30, 45]}
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
    width: (width - 40) * 0.4,
  },
  center: {
    width: (width - 40) * 0.3,
    flex: 2,
  },
  right: {
    width: (width - 40) * 0.3,
    flex: 2,
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
    flex: 4,
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
