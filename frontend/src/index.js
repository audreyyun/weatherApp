import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as dotenv from 'dotenv';

dotenv.config();


document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});