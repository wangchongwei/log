import { TEST_REDUX_ADD } from '../actions/testActionType';

const initState = {
  testNum: 0,
}

export default function test(state = initState, action) {
  switch (action.type) {
    case TEST_REDUX_ADD:
      return {
        ...state,
        testNum: state.testNum + 1,
      };
  
    default:
      return state;
  }
}
