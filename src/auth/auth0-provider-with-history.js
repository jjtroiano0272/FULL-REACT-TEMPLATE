import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  // Coding these as env variables doesn't work. You have to put the variable in here.
  // TODO: Learn how to send store this in an .env var or similar
  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const domain = 'dev-b70h-mzq.us.auth0.com';
  const clientId = 'aPdJ4ZzQP40iUvtMR2CSC3siJfAPd8tz';

  const navigate = useNavigate();

  const onRedirectCallback = appState => {
    navigate.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
