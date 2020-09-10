import * as types from './actionTypes';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  focused: false,
  list:[]
});

export default(state = defaultState, action) =>{
  switch (action.type) {
    case types.FOCUS_INPUT:
      // immutable的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused',true);
    case types.BLUR_INPUT:
        return state.set('focused',false);
    case action.type,types.SET_LIST:
       return state.set('list',action.data);
    default:
        return state;
  }
}