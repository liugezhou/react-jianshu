import React ,{ Fragment }from 'react';
import Header from './common/header/index';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
   <Fragment>
     <GlobalStyle/>
     <GlobalIcon/>
     <Provider store={store}>
        <Header/>
     </Provider>
    </Fragment>
  );
}

export default App;
