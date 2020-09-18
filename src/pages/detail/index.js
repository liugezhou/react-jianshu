import React, { PureComponent } from 'react';
import { DetailWrapper,Header, Content} from './style';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { creators} from './store';
class Detail extends PureComponent {
  render(){
    const {title,content} = this.props;
    return (
      <DetailWrapper>
          <Header>
          {title}
          </Header>
          <Content dangerouslySetInnerHTML={{__html:content}}>
          </Content>
      </DetailWrapper>
    )
  }

  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state)=>({
  title:state.getIn(['detail','titile']),
  content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(creators.getDetail(id));
  }
})
export default connect(mapState,mapDispatch)(withRouter(Detail));