import * as types from './actionTypes';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  titile:'',
  content:''

});


export default(state = defaultState, action) =>{
  switch (action.type) {
    case types.GET_DETAIL_ARTICLE:
      return state.merge({
        'title':action.title,
        'content':action.content
      })
    default:
        return state;
  }
}