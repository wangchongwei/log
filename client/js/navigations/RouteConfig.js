/** 首页------- start*/
import TabView from '../tab/TabView'
import AddNote from '../pages/note/AddNote'


const RouteConfig = {
  TabView: {
    screen: TabView,
    navigationOptions: {
      title: 'tab'
    },
  },
  AddNote: {
    screen: AddNote,
    navigationOptions: {
      title: '新增日记',
    },
  }
}

export default RouteConfig
