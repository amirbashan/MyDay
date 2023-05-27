import React, { useEffect } from 'react';
import { store } from './store/store';
import config from './config';

import './App.css';
import { updateFromConfiguration } from './store/slices/generalSlice';
import SideBar from './components/sideBar/SideBar';

function App() {
  useEffect(() => {
    store.dispatch(updateFromConfiguration(config.general));
  }, []);
  return (
    <div>
      <SideBar />
      <div>app</div>
    </div>
  );
}

export default App;
