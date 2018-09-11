import React from 'react';
import Header from './Header';
import Title from './Title';


const ScreenConfig = {
  mode: 'card',
  headerMode: 'float',
  initialRouteName: 'TabView',

  navigationOptions: {
    gesturesEnabled: false,
    headerTintColor: '#fff', // 字体颜色
    header: (headerProps: Object) => {
      return headerProps.title === 'tab' ?
        <Header {...headerProps} style={styles.header} /> :
        <Title />
    },
  },
};

const styles = {
  header: {
    backgroundColor: '#316dcd',
  },
};

export default ScreenConfig;
