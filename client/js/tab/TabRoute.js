/**
 * @flow
 */
import BillPage from '../pages/bill';
import HomePage from '../pages/home';
import NotePage from '../pages/note';
import MinePage from '../pages/mine';

const TabRoute = {
  
  HomePage: {
    screen: HomePage,
  },

  NotePage: {
    screen: NotePage,
  },
  
  BillPage: {
    screen: BillPage,
  },

  MinePage: {
    screen: MinePage,
  }
  
};

export default TabRoute;
