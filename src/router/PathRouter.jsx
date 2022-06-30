import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';

export default function PathRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />}/>
        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
      </Switch>
    </BrowserRouter>
  );
}
