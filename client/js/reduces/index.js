import { combineReducers } from 'redux';
import login from './login';
import { APP_LOGOUT } from '../actions/loginActionType';

const appReducer = combineReducers({
  login,
});

const rootReducer = (state, action) => {
  if (action.type === APP_LOGOUT) {
    console.log('logout=================');
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;