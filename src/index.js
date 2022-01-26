import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import './index.css';
import './components/common/rainbow-spin-loader.css';
import { BrowserRouter as Router } from 'react-router-dom';

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

// Coding these as env variables doesn't work. You have to put the variable in here.
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENTID;
// TODO: Learn how to send store this in an .env var or similar
const domain = 'dev-b70h-mzq.us.auth0.com';
const clientId = 'aPdJ4ZzQP40iUvtMR2CSC3siJfAPd8tz';

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
