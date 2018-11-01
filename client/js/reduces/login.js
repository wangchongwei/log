// flow

import {
  LOGIN_POST_SUCCESS,
} from '../actions/loginActionType';

const initialState = {
  userName: '',
  login: true,
};

export default function login(state = initialState, action) {
  console.log('login reducer');
  console.log(action);
  switch (action.type) {
    case LOGIN_POST_SUCCESS:
      return {
        ...state,
        userName: action.json.userName,
        login: true,
      };

    default:
      return state;
  }
}

