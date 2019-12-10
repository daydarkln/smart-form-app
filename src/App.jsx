import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store/configureStore';
import Auth from './modules/Auth';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Auth handleAuthSubmit={() => true} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
