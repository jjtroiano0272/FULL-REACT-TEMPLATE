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
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import * as CryptoJS from 'crypto-js';

export default function Navbar({ toggleDark, setToggleDark }) {
  // const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const inputRef = useRef(0);
  const { logout, loginWithRedirect, isAuthenticated, user, isLoading } =
    useAuth0();

  const pages = [
    <Link to='/about' className='mui-nav-link'>
      About
    </Link>,
  ];
  const settings = [
    isAuthenticated ? (
      <Link to='/my-profile' className='mui-nav-link'>
        Profile
      </Link>
    ) : (
      'Login'
    ),
    'Dashboard',
    isAuthenticated ? 'Logout' : null,
  ];

  // Switch theme
  useHotkeys(
    'cmd+/, ctrl+/',
    () => {
      handleModeChange();
    },
    [toggleDark]
  );

  // Focus search box
  useHotkeys(
    'cmd+k, ctrl+k',
    () => {
      // inputRef.current.focus();
    }
    // [inputRef]
  );
  // <nav className='navbar navbar-expand-lg navbar-light mb-4'>
  //   <div className='container'>
  //     <NavLink to='/' className='navbar-brand'>
  //       <img src={logo} alt='Brand logo' id='nav-logo' />
  //     </NavLink>
  //     <button
  //       className='navbar-toggler'
  //       type='button'
  //       data-toggle='collapse'
  //       data-target='#navbarSupportedContent'
  //       aria-controls='navbarSupportedContent'
  //       aria-expanded='false'
  //       aria-label='Toggle navigation'
  //     >
  //       <span className='navbar-toggler-icon'></span>
  //     </button>

  //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
  //       <ul className='navbar-nav mr-auto'>
  //         {!isAuthenticated ? (
  //           <li className='nav-item' onClick={() => loginWithRedirect()}>
  //             <Link to='' className='nav-link'>
  //               Login
  //             </Link>
  //           </li>
  //         ) : (
  //           <li className='nav-item'>
  //             <Link to='/my-profile' className='nav-link'>
  //               My Profile: <strong>{user.name.substring(0, user.name.indexOf('@'))}</strong>
  //             </Link>
  //           </li>
  //         )}

  //         <li className='nav-item'>
  //           <Link to='/about' className='nav-link'>
  //             About
  //           </Link>
  //         </li>

  //         <li className='nav-item'>
  //           <a className='nav-link disabled' href='#'>
  //             {/* Conditional logic here or private-users only stuff */}
  //             Disabled
  //           </a>
  //         </li>
  //       </ul>
  //       <form className='form-inline my-2 my-lg-0 ms-md-auto'>
  //         <input
  //           className='form-control mr-sm-2'
  //           type='search'
  //           ref={inputRef}
  //           placeholder='Search'
  //           aria-label='Search'
  //         />
  //       </form>

  //       <Tooltip
  //         title={
  //           !darkMode
  //             ? 'Switch theme to dark mode'
  //             : 'Switch theme to light mode'
  //         }
  //       >
  //         <FormGroup>
  //           <FormControlLabel
  //             className='mx-2'
  //             control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
  //             label=''
  //             onClick={toggleDarkMode}
  //             data-tip
  //             data-for='lightDarkModeTip'
  //             type='checkbox'
  //           />
  //         </FormGroup>
  //       </Tooltip>
  //     </div>
  //   </div>
  // </nav>

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleModeChange = () => {
    setToggleDark(!toggleDark);
    console.log(`toggleDark is now ${!toggleDark}`);
  };

  const useStyles = makeStyles(theme => ({
    // Styling material components
    // root: {
    //   width: '100%',
    //   height: '100vh',
    //   backgroundColor: theme.palette.background.default,
    //   [theme.breakpoints.down('xs')]: {
    //     paddingTop: theme.spacing(2),
    //   },
    // },
    // media: {
    //   height: 56,
    //   paddingTop: '56.25%', // 16:9
    // },
    // avatar: {
    //   backgroundColor: red[500],
    // },
  }));

  const classes = useStyles();

  const emailHash =
    isAuthenticated && CryptoJS.MD5(user.email).toString().trim().toLowerCase();

  return (
    <AppBar position='static' className='mb-4' color='primary'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink to='/' className='navbar-brand'>
              <img src={logo} alt='Brand logo' id='nav-logo' />
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <NavLink to='/' className='navbar-brand'>
              <img src={logo} alt='Brand logo' id='nav-logo' />
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* TODO: Some sort of ... filling up loader */}
                <Avatar
                  src={
                    isAuthenticated
                      ? `https://www.gravatar.com/avatar/${emailHash}?d=identicon`
                      : null
                  }
                  alt={
                    user &&
                    user.name
                      .toLocaleUpperCase()
                      .substring(0, user.name.indexOf('@'))
                  }
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isAuthenticated ? (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>
                    <Link to='/my-profile' className='mui-nav-link'>
                      Profile
                    </Link>
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>
                    <Link
                      to='/my-profile'
                      className='mui-nav-link'
                      onClick={() => loginWithRedirect()}
                    >
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
              )}

              <MenuItem>
                <Typography textAlign='center'>
                  <Switch
                    checked={toggleDark}
                    onChange={handleModeChange}
                    name='toggleDark'
                    color='default'
                  />
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
