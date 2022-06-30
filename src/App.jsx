import React from 'react';
import './App.css';

import PathRouter from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <PathRouter />
      <Footer />
    </>
  );
}

export default App;
