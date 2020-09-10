import * as types from './actionTypes';
const defaultState = {
  focused: false
};

export default(state=defaultState, action) =>{
  if(Object.is(action.type,types.FOCUS_INPUT)){
    return {
      focused:true
    }
  }
  if(Object.is(action.type,types.BLUR_INPUT)){
    return {
      focused:false
    }
  }
  return state;
}