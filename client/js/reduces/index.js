import { combineReducers } from 'redux';
import login from './login';
import test from './test';
import { APP_LOGOUT } from '../actions/loginActionType';

const appReducer = combineReducers({
  login,
  test,
});

const rootReducer = (state, action) => {
  if (action.type === APP_LOGOUT) {
    console.log('logout=================');
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;