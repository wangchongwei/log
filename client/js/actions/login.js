/**
 * @flow
 * 登录的动作
 */
import { LOGIN_POST_SUCCESS, APP_LOGOUT } from './loginActionType';

/** 登录 */
export function loginPost() {
  console.log('loginPost');
  return dispacth => {
    console.log('dispatch');
    dispacth({
      type: LOGIN_POST_SUCCESS,
      json: { userName: 'test' },
    });
  }
}

/** 登出 */
export function logout() {
  return dispatch => {
    dispatch({ type: APP_LOGOUT });
  }
}

