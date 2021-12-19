import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import { ThemeContext } from './components/ThemeProvider';

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      <Navbar />

      {/* If you go to __ display __ */}
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}
