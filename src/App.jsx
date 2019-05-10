import React from "react";
import { Provider } from 'react-redux';

import { Routes } from './routes';
import { store } from './store';

import './assets/styles/main.scss';
function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export {
  App
}

