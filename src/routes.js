import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import MultiForm from './containers/MultiForm';
import UserResponse from './containers/UserResponse';
import Home from './components/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={MultiForm} />
          <Route path="/response" component={UserResponse} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};
export default Router;