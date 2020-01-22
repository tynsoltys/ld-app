import React from 'react';
import Logo from '../ld-logo-square-128.png';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='logo-container'>
        <img src={Logo} alt='log dna helix logo' />
      </div>
      <h1>What is Lorem Ipsum?</h1>
    </header>
  );
};

export default Header;
