import * as types from './actionTypes';
import axios from 'axios';

const changeLogin = () =>({
  type:types.CHANGE_LOGIN,
  value:true
})
 
export const logout = () =>({
  type:types.CHANGE_LOOUT,
  value:false
})

export const login = (account,password) =>{
  return (dispatch) =>{
    axios.get('/api/login.json?account='+account+"&password="+password).then((res)=>{
      const data = res.data.data;
      if(data){
        dispatch(changeLogin())
      }else{
        alert('登录失败')
      }
    })
  }
}