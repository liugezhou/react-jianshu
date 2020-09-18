import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
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
import { creators as loginCreators} from '../../pages/login/store'

class Header extends Component {
  getListArea(){
    let { focused, list, page,handleMouseEnter,handleMouseLeave,mouseIn,changePageList} = this.props;
    const jsList = list.toJS();
    const pageList = []
    if(jsList.length){
      for(let i = (page-1)*10; i < page*10; i++){
          if(i>=jsList.length){
            break;
          }
          pageList.push(
            <SearchInfoItem key={jsList[i]}> { jsList[i] }  </SearchInfoItem>
          )
      }
    }
    if(focused || mouseIn){
      return (
          <SearchInfo onMouseEnter ={handleMouseEnter} onMouseLeave={ handleMouseLeave }>
              <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch onClick={()=> changePageList(this.spinIcon)}>
                    <i className="iconfont" ref={(icon) => this.spinIcon = icon}>&#xe685;</i>  换一批
                  </SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                  { pageList  }
              </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render(){
    const {focused, handleInputFocus,handleInputBlur,list,login,logout} = this.props;
    return(
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          { login ? 
            <NavItem className='right' onClick={logout}>退出</NavItem> : 
           <Link to='/login'><NavItem className='right'>登录</NavItem> </Link> 
          }
          <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in = {focused}
              timeout = {300}
              classNames = 'slide'
            >
                <NavSearch 
                      className={ focused ? 'focused' : ''}
                      onFocus={()=> handleInputFocus(list)}
                      onBlur = {handleInputBlur}
                >
                </NavSearch>
                </CSSTransition>
                <i  className={ focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe617;</i>
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
    list:state.get('header').get('list'),
    page:state.get('header').get('page'),
    totalPage:state.get('header').get('totalPage'),
    mouseIn:state.get('header').get('mouseIn'),
    login:state.get('login').get('login')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      if(list.size === 0 ){
        dispatch(creators.getList())
      }
      dispatch(creators.focusInput())
    },
    handleInputBlur(){
      dispatch(creators.blurInput())
    },
    handleMouseEnter(){
      dispatch(creators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(creators.mouseLeave())
    },
    logout(){
      dispatch(loginCreators.logout())
    },
    changePageList(spin){
       let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
       if(originAngle){
        originAngle = parseInt(originAngle,10)
       }else{
        originAngle = 0;
       }
       spin.style.transform=`rotate(${originAngle + 360}deg)`;
      dispatch(creators.changePage())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);