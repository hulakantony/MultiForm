import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import App from './App';
import MultiForm from './containers/MultiForm';
import UserResponse from './containers/UserResponse';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={MultiForm} />
          <Route path="/response" component={UserResponse} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
