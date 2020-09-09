import React ,{ Fragment }from 'react';
import Header from './common/header/index';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';

function App() {
  return (
   <Fragment>
     <GlobalStyle/>
     <GlobalIcon/>
     <Header/>
    </Fragment>
  );
}

export default App;
