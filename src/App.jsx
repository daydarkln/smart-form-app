import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store/configureStore';

import 'antd/dist/antd.css';
import './App.css';
import MainRoute from './MainRoute';

function App() {
  return (
    <Provider store={configureStore()}>
      <ConnectedRouter history={history}>
        <MainRoute />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
