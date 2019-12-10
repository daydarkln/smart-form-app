import React from 'react';

import Auth from './modules/Auth';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Auth handleAuthSubmit={() => true} />
    </div>
  );
}

export default App;
