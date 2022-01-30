import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './common/rainbow-spin-loader.css';
import JSONPretty from 'react-json-pretty';
import Button from '@mui/material/Button';
import * as CryptoJS from 'crypto-js';
import rainbowSpinLoader from './common/rainbowSpinLoader';

export default function UserProfile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return rainbowSpinLoader();
  }

  // You'll use crypto.MD5('StringToHash')
  const emailHash = CryptoJS.MD5(user.email).toString().trim().toLowerCase();

  return (
    <div className='container'>
      {isAuthenticated ? (
        <>
          <img
            src={`https://www.gravatar.com/avatar/${emailHash}?d=identicon`}
            className='rounded mb-3'
            alt={user.name}
          />
          <h2>{user.name.substring(0, user.name.indexOf('@'))}</h2>
          <p>{user.email}</p>
          <Button
            variant='contained'
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Gemme out!
          </Button>
        </>
      ) : (
        <p className='lead'>You're not logged in!</p>
      )}
    </div>
  );
}
