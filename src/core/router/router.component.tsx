import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { ProductListScene, CheckoutScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.productList]}
          component={ProductListScene}
        />
        <Route
          exact={true}
          path={switchRoutes.checkout}
          component={CheckoutScene}
        />
      </Switch>
    </Router>
  );
};