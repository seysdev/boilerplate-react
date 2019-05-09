import React from "react";
import { Provider } from 'react-redux';

import { Routes } from './routes';
import { store } from './store';

function App() {
  return (
    <div className="Wrapper">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export {
  App
}

