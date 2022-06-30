import React from 'react';
import './App.css';

import PathRouter from './router/PathRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';

function App() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <section className="container__principal">
          <PathRouter />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
