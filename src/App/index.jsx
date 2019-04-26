import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import createBrowserHistory from 'history/createBrowserHistory';
import store from '../store';
import HeaderNav from '../components/HeaderNav';
import MainPage from '../containers/MainPage';
import ModulePage from '../containers/ModulePage';
import Footer from '../components/Footer';
import Login from '../containers/Login';
import User from '../containers/UserPage';
import Admin from '../containers/Admin';
import Home from '../containers/home';

// const history = createBrowserHistory();

export default function () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <HeaderNav />
          <Route path="/module/:id" exact component={ModulePage} />
          <Route path="/" exact component={Home} />
          <Route path="/course/:id" exact component={MainPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/user" exact component={User} />
          <Route path="/admin" exact component={Admin} />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
