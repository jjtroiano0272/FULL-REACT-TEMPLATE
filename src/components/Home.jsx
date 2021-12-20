import React, { useState } from 'react';
import Footer from './Footer';
import Main from './Main';

export default function Home(props) {
  return (
    <>
      <div className='container'>
        <h1>
          You're in: <strong>Home</strong>
        </h1>
        <hr />
      </div>
      <Main />
      <Footer />
    </>
  );
}
