import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper,Logo, Nav,NavItem,NavSearch, Addtion, Button,SearchWrapper} from './style';
import { connect } from 'react-redux';
import { creators }  from './store';

const Header = (props)=>{
  return(
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
        <SearchWrapper>
          <CSSTransition
            in = {props.focused}
            timeout = {300}
            classNames = 'slide'
          >
              <NavSearch 
                    className={ props.focused ? 'focused' : ''}
                    onFocus={props.handleInputFocus}
                    onBlur = {props.handleInputBlur}
              >
              </NavSearch>
              </CSSTransition>
              <i  className={ props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
        </SearchWrapper>
        <Addtion>
          <Button className='writing'><i className="iconfont">&#xe600;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addtion>
      </Nav>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = creators.focusInput();
      dispatch(action)
    },
    handleInputBlur(){
      const action = creators.blurInput();
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);