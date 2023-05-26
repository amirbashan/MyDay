import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import config from './config';
import { store } from './store/store';
import { Provider } from 'react-redux';

const render = async () => {
  await config.init();
  console.log('CONFIG', config);
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

render();
