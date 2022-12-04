import React from 'react';
import Navigation from './navigation/Navigation';
import CoinContextProvider from './context/CoinContext';

const App = () => {
  return (
    <CoinContextProvider>
      <Navigation />
    </CoinContextProvider>
  );
};

export default App;
