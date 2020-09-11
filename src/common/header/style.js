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
`

export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .slide-enter{
    width:160px;
    transition:all .3s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit{
    width:240px;
    transition:all .2s ease-out;
  }
  .slide-exit-active{
  width:160px;
  }
  .zoom {
    position:absolute;
    right:5px;
    bottom:5px;
    line-height:30px;
    width:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  padding:0 30px 0 20px;
  margin-top:9px;
  margin-left:20px;
  border:none;
  outline:none;
  border-radius:19px;
  box-sizing:border-box;
  background:#eee;
  font-size:14px;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
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

export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-heght:20px;
  font-size:14px;
  color:#969696;
`

export const SearchInfoSwitch = styled.div`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin {
    transition:all .5 ease-in;
    display:block;
    float:left;
    transform-origin:center center;
  }
`

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  font-size:12px;
  padding: 5px 9px;
  border:1px solid #ddd;
  color:#787878;
  margin-right:15px;
  margin-bottom:20px;
  border-radius:3px;
`

export const SearchInfoList = styled.a`
 
`
