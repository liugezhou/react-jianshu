import * as types from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'

export const focusInput = () =>({
  type:types.FOCUS_INPUT
})

export const blurInput = () => ({
  type:types.BLUR_INPUT
})

export const mouseEnter = () => ({
  type:types.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type:types.MOUSE_LEAVE
})

export const changePage = () => ({
  type:types.CHANGE_PAGE
})

const setList =(data) =>({
  type:types.SET_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length/10)
})

export const getList = () =>{
  return (dispatch) =>{
    axios.get('/api/headerList.json').then( (res)=>{
      const data = res.data;
      dispatch(setList(data.data))
    }).catch( ()=>{
      console.log('error');
    })
  }
}