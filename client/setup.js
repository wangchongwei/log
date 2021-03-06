/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import Moment from 'moment';
import configureStore from './js/store/ConfigureStore';
import App from './App';


require('moment/locale/zh-cn.js');
// moment对象时间格式设为中文
Moment.locale('zh-cn');

  class TimeoutXMLHttpRequest extends XMLHttpRequest {
    timeout: number = 30000;
  }
  global.XMLHttpRequest = TimeoutXMLHttpRequest;


// const store = configureStore();
type Props = {

}
type State = {
  isLoading: boolean,
  store: Object,
}

class Root extends React.Component<Props, State> {

  state = {
    isLoading: true,
    store: configureStore(),
  };
    
  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}


export default Root;
