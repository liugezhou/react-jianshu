import * as types from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'

const getList =(data) =>({
  type:types.GET_DETAIL_ARTICLE,
  title:fromJS(data.titile),
  content:fromJS(data.content)
})

export const getDetail = (id) =>{
  return (dispatch) =>{
    axios.get('/api/detail.json?id='+id).then((res)=>{
      const data = res.data;
      dispatch(getList(data.data))
    })
  }
}