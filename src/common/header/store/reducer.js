import * as types from './actionTypes';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  focused: false
});

export default(state = defaultState, action) =>{
  if(Object.is(action.type,types.FOCUS_INPUT)){
    // immutable的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused',true)
  }
  if(Object.is(action.type,types.BLUR_INPUT)){
    return state.set('focused',false)
  }
  return state;
}