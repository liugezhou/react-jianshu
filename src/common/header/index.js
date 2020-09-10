import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {  
  HeaderWrapper,
  Logo, 
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
 } from './style';
import { connect } from 'react-redux';
import { creators }  from './store';

class Header extends Component {
  getListArea(){
    const {focused, list} = this.props;
    if(focused){
      return (
        <SearchInfo>
                  <SearchInfoTitle>
                      热门搜索
                      <SearchInfoSwitch>换一批</SearchInfoSwitch>
                  </SearchInfoTitle>
                  <SearchInfoList>
                    {list.map((item) => {
                      return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    })}
                  </SearchInfoList>
                </SearchInfo>
      )
    }
  }
  render(){
    const {focused, handleInputFocus,handleInputBlur} = this.props;
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
              in = {focused}
              timeout = {300}
              classNames = 'slide'
            >
                <NavSearch 
                      className={ focused ? 'focused' : ''}
                      onFocus={handleInputFocus}
                      onBlur = {handleInputBlur}
                >
                </NavSearch>
                </CSSTransition>
                <i  className={ focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
                { this.getListArea()}
          </SearchWrapper>
          <Addtion>
            <Button className='writing'><i className="iconfont">&#xe600;</i>写文章</Button>
            <Button className='reg'>注册</Button>
          </Addtion>
        </Nav>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list:state.get('header').get('list')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      dispatch(creators.getList())
      dispatch(creators.focusInput())
    },
    handleInputBlur(){
      dispatch(creators.blurInput())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);