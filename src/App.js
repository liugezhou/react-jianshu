import React ,{ Fragment }from 'react';
import Header from './common/header/index';
import { GlobalStyle } from './style.js';

function App() {
  return (
   <Fragment>
     <GlobalStyle/>
     <Header/>
    </Fragment>
  );
}

export default App;
