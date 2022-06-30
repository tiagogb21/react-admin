import React from 'react';
import './App.css';

import PathRouter from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';

function App() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <PathRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
