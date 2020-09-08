import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href:'/'
})`
height:56px;
position:absolute;
top:0;
left:0;
width:100px;
display:block;
background:url(${logoPic});
background-size:contain;
`;

export const Nav = styled.div`
width:960px;
height:100%;
margin:0 auto;
`

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  padding:0 20px;
  margin-top:9px;
  margin-left:20px;
  border:none;
  outline:none;
  border-radius:19px;
  box-sizing:border-box;
  background:#eee;
  font-size:14px;
  &::placeholder{
    color:#999;
  }
`;

export const Addtion = styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  margin-top:9px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    color:#fff;
    background:#ec6149;
  }
`