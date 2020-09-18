import React , { Fragment }from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
function App() {
  return (
   <Fragment>
     <GlobalStyle/>
     <GlobalIcon/>
     <Provider store={store}>
     <BrowserRouter>
       <div>
            <Header/>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/write" exact component={Write}></Route>
        </div>
        </BrowserRouter>
     </Provider>
    </Fragment>
  );
}

export default App;
