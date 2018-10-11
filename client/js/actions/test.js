/**
 * @flow
 * 测试用的action
 */
import { TEST_REDUX_ADD } from './testActionType';

export function testAdd () {
  return dispatch => {
    dispatch({ type: TEST_REDUX_ADD });
  }
}