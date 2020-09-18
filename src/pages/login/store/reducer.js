import * as types from './actionTypes';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  login: false
});


export default(state = defaultState, action) =>{
  switch (action.type) {
    case types.CHANGE_LOGIN:
      return state.set('login',action.value);
    case types.CHANGE_LOOUT:
      return state.set('login',action.value);
    default:
        return state;
  }
}