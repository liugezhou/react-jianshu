import * as types from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'

export const focusInput = () =>({
  type:types.FOCUS_INPUT
})

export const blurInput = () => ({
  type:types.BLUR_INPUT
})

const setList =(data) =>({
  type:types.SET_LIST,
  data:fromJS(data)
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