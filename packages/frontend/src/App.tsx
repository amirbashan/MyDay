import React, { useEffect } from 'react';
import { store } from './store/store';
import config from './config';

import './App.css';
import { updateFromConfiguration } from './store/slices/generalSlice';

function App() {
  useEffect(() => {
    store.dispatch(updateFromConfiguration(config.general));
  }, []);
  return <div>app</div>;
}

export default App;
