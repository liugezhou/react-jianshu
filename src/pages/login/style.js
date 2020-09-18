import styled from 'styled-components';

export const LoginWrapper = styled.div`
z-index:0;
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:56px;
  background:#eee;
`

export const LoginBox = styled.div`
width:500px;
height:320px;
margin:80px auto;
background:#fff;
padding-top:50px;
box-shadow:0 0 8px rgba(0,0,0,.1);
`

export const Input = styled.input`
  display:block;
  width:300px;
  height:40px;
  line-height:40px;
  padding:0 10px;
  margin:15px auto;
  color:#777;
`

export const Button = styled.div`
  width:280px;
  height:40px;
  line-height:40px;
  color:#fff;
  background:#3194d0;
  border-radius:15px;
  margin:50px auto;
  text-align:center;
`