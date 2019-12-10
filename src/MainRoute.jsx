import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './modules/Auth';
import AspectSelectionForm from './modules/AspectSelectionForm';

const MainRoute = () => (
  <div className="App">
    <Switch>
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/form" component={AspectSelectionForm} />
      <Redirect to="/auth" />
    </Switch>
  </div>

)

export default MainRoute;