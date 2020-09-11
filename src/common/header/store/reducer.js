import * as types from './actionTypes';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  focused: false,
  list:[],
  mouseIn:false,
  page:1,
  totalPage:1
});

export default(state = defaultState, action) =>{
  switch (action.type) {
    case types.FOCUS_INPUT:
      // immutable的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused',true);
    case types.BLUR_INPUT:
        return state.set('focused',false);
    case types.SET_LIST:
       return state.merge({
         'list':action.data,
         'totalPage':action.totalPage
       });
    case types.MOUSE_ENTER:
      return state.set('mouseIn',true) ;
    case types.MOUSE_LEAVE:
      return state.set('mouseIn',false) ;
    case types.CHANGE_PAGE:
      if(state.get('page') < state.get('totalPage')){
        let page = state.get('page') ;
        return state.set('page',page+ 1);
      }else{
        return state.set('page', 1)
      }
    default:
        return state;
  }
}