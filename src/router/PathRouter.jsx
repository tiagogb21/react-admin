import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import Scheduler from '../pages/Calendar';

const message404 = "There's nothing here: 404!";

export default function PathRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/calendar" element={<Scheduler />} />
        <Route path="*" element={<p>{message404}</p>} />
      </Routes>
    </BrowserRouter>
  );
}
