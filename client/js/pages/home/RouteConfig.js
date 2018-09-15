/**
 * @flow
 * home模块路由
 */
import ChatPage from './ChatPage'; // 聊天主页

const route = {
  ChatPage: {
    screen: ChatPage,
    navigationOptions: {
      title: '聊天',
    },
  },
};

export default route;
