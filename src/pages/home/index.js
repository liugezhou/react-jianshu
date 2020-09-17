import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { creators } from './store';
import { HomeWrapper,HomeLeft,HomeRight, BackTop } from './style';

class Home extends PureComponent {
  handleScrollTop() {
		window.scrollTo(0, 0);
  }
  
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img  className="bannerImg" alt="加载失败" 
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600081950804&di=952259b04603ba316f478e41fb6f2666&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F17982%2F17981927.jpg" />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
            <Recommend/>
            <Writer/>
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  
  bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapState = (state) =>({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(creators.getHomeInfo());
  },
  changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(creators.toggleTopShow(true))
		}else {
			dispatch(creators.toggleTopShow(false))
		}
	}
});


export default connect(mapState,mapDispatch)(Home);