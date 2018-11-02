import React from 'react';
import { View, StyleSheet } from 'react-native';
import ModalDatePicker from './ModalDatePicker';
import ModalTimePicker from './ModalTimePicker';

type Props = {
  format: 'YYYY-MM-DD HH:ss' | 'YYYY-MM-DD'; // 需要的日期格式
}

type State = {}

export default class MyClass extends React.PureComponent<Props, State>{

    static defaultProps = {
      format: 'YYYY-MM-DD',
    }

    openModal =() => {
      this.refs.modal.openModal();
    }

    closeModal =() => {
      this.refs.modal.closeModal();
    }

    render(){
      const { format, ...other } = this.props;
      if(format === 'YYYY-MM-DD') {
        return (
          <ModalDatePicker
            {...other}
            ref={'modal'}
          />)
      }
        return(
          <ModalTimePicker
            {...other}
            ref={'modal'}
          />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

