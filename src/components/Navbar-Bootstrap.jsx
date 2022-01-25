import React, { useState, useContext, useRef } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import { useHotkeys } from 'react-hotkeys-hook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../image/react-logo.svg';
import { MaterialUISwitch } from './common/Switch';
import $ from 'jquery';
import LoginButton from './common/LoginButton';
import LogoutButton from './common/LogoutButton';
import UserProfile from './UserProfile';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const inputRef = useRef(0);
  const { logout, loginWithRedirect, isAuthenticated, user, isLoading } =
    useAuth0();

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


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
    'cmd+k, ctrl+k',
    () => {
      inputRef.current.focus();
    },
    [inputRef]
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-light mb-4'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          <img src={logo} alt='Brand logo' id='nav-logo' />
        </NavLink>
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
            {!isAuthenticated ? (
              <li className='nav-item' onClick={() => loginWithRedirect()}>
                <Link to='' className='nav-link'>
                  Login
                </Link>
              </li>
            ) : (
              <li className='nav-item'>
                <Link to='/my-profile' className='nav-link'>
                  My Profile: <strong>{user.name.substring(0, user.name.indexOf('@'))}</strong>
                </Link>
              </li>
            )}

            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
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

          <Tooltip
            title={
              !darkMode
                ? 'Switch theme to dark mode'
                : 'Switch theme to light mode'
            }
          >
            <FormGroup>
              <FormControlLabel
                className='mx-2'
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label=''
                onClick={toggleDarkMode}
                data-tip
                data-for='lightDarkModeTip'
                type='checkbox'
              />
            </FormGroup>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
}
