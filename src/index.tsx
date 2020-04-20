import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import Navbar from './Components/Navbar/Navbar';
import Analytics from './pages/Analytics/Analytics';
import News from './pages/News/News';

import { Provider } from 'react-redux';
import Store from './store';
import * as Router from 'react-router-dom';

import requestIdleCallbackPolyfill from './polyfills/requestIdleCallback/requestIdleCallbackPolyfill';
import cancelIdleCallback from './polyfills/requestIdleCallback/cancelIdleCallback';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router.BrowserRouter>
        <Router.Route exact={true} component={Navbar} />
        <Router.Route exact={true} path="/" component={App} />
        <Router.Route path="/analytics" component={Analytics} />
        <Router.Route path="/news" component={News} />
      </Router.BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

declare global {
  interface Window {
    requestIdleCallback: any;
    cancelIdleCallback: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

if (!('requestIdleCallback' in window)) {
  window.requestIdleCallback = window.requestIdleCallback || requestIdleCallbackPolyfill;

  window.cancelIdleCallback = window.cancelIdleCallback || cancelIdleCallback;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
