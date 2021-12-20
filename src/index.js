import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

// When navbar is collapsed:
//    div.navbar-collapse.collapse
//    button.navbar-toggler.collapsed[aria-expanded='false']
//
// When navbar is open:
//    div.navbar-collapse.collapse.show
//    button.navbar-toggler.[aria-expanded='true']
//
// Used to close navbar when clicking outside
$(document).click((event) => {
  // const isNavbarOpened = $('#navbar.navbar-collapse').hasClass('collapse show');
  const isNavbarOpened = $('div.navbar-collapse').hasClass('collapse show');
  console.log('navbarOpen: ', isNavbarOpened);

  // this way, if the navbar is not opened, we don't perform unnecessary operations
  if (isNavbarOpened) {
    const clickedElement = $(event.target);
    const clickedInsideNavbar = clickedElement.closest('nav.navbar').length > 0;

    if (!clickedInsideNavbar) {
      $('button.navbar-toggler').click();
    }
  }
});

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
