import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import greenBrickSrc from './assets/green-brick.jpg';
import yellowBrickSrc from './assets/yellow-brick.jpg';
import greyBrickSrc from './assets/grey-brick.jpg';

const initialState = {
  products: [
    { id: 'green-brick', src: greenBrickSrc },
    { id: 'yellow-brick', src: yellowBrickSrc },
    { id: 'grey-brick', src: greyBrickSrc },
  ],
  basket: [],
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
