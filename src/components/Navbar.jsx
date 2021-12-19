import React, { useState, useContext, useRef } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { useHotkeys } from 'react-hotkeys-hook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../image/react-logo.svg';

export default function Navbar({ user }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const inputRef = useRef();

  // Switch theme
  useHotkeys(
    'cmd+/, ctrl+/',
    () => {
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  // Focus search box
  useHotkeys(
    '/',
    () => {
      console.log("'/' pressed! Focusing search box...");
      inputRef.current.focus();
    },
    [inputRef]
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-light mb-4'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          {/* This part only displays if you have text currently... */}
          <img src={logo} alt='Brand logo' />
          HOME
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                My Profile
              </Link>
            </li>

            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                {/* Conditional logic here or private-users only stuff */}
                Disabled
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0 ms-md-auto'>
            <input
              className='form-control mr-sm-2'
              type='search'
              ref={inputRef}
              placeholder='Search'
              aria-label='Search'
            />
          </form>
          <button
            onClick={toggleDarkMode}
            className='btn btn-lg my-2 my-sm-0'
            type='checkbox'
          >
            {darkMode === true ? '🔆' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}
