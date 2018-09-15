/** 首页------- start*/
import TabView from '../tab/TabView'
import AddNote from '../pages/note/AddNote'
import HomeRoute from '../pages/home/RouteConfig';


const RouteConfig = {
  TabView: {
    screen: TabView,
    navigationOptions: {
      title: 'tab'
    },
  },
  ...HomeRoute, // home页面
  AddNote: {
    screen: AddNote,
    navigationOptions: {
      title: '新增日记',
    },
  }
}

export default RouteConfig
