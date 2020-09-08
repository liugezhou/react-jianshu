import React, { Component } from 'react';
import {HeaderWrapper,Logo, Nav,NavItem,NavSearch, Addtion, Button} from './style'
class Header extends Component {
  render() {
    return(
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavSearch></NavSearch>
          <Addtion>
            <Button className='writing'>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addtion>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;