import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import HeaderNav from '../components/HeaderNav';
import MainPage from '../containers/MainPage';
import ModulePage from '../containers/ModulePage';
import Footer from '../components/Footer';

// const history = createBrowserHistory();
const store = createStore(rootReducer);

export default function () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <HeaderNav />
          <Route exact path="/module" component={ModulePage} />
          <Route exact path="/" component={MainPage} />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
