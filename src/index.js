import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';
import Auth0ProviderWithNavigate from './auth/auth0-provider-with-navigate';
import './index.css';
import './components/common/rainbow-spin-loader.css';
import reportWebVitals from './reportWebVitals';

import { getConfig } from './config';

// Collapses Navbar when you click outside its boundaries.
$(document).click(event => {
  // const isNavbarOpened = $('#navbar.navbar-collapse').hasClass('collapse show');
  const isNavbarOpened = $('div.navbar-collapse').hasClass('collapse show');

  // this way, if the navbar is not opened, we don't perform unnecessary operations
  if (isNavbarOpened) {
    const clickedElement = $(event.target);
    const clickedInsideNavbar = clickedElement.closest('nav.navbar').length > 0;

    if (!clickedInsideNavbar) {
      $('button.navbar-toggler').click();
    }
  }
});

const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Router>
    <Auth0ProviderWithNavigate {...providerConfig}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Auth0ProviderWithNavigate>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
