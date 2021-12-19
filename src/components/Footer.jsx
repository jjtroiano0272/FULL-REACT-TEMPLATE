import React, { useState } from 'react';

export default function Footer(props) {
  return (
    <footer className='footer fixed-bottom'>
      <div className='container'>
        <div>
          <p>
            <small className='text-secondary mb-2'>© 2021 J. Troiano</small>
          </p>
        </div>
        <div className='ms-auto'>
          <p>
            <a
              href='https://portfolio-page-vite-6r4.pages.dev/'
              className='pointer text-secondary'
            >
              View Profile
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
