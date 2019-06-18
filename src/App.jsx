import React from "react";
import { Provider } from 'react-redux';

import { RoutingRoot } from './routing';
import { store } from './store';

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <RoutingRoot />
      </Provider>
    </div>
  )
}

export {
  App
}

