import React from 'react';
import logo from '../images/logo/logo.svg';

function Header() {
  return (
    <header className="header page__header">
      <img
        className="logo header__logo"
        src={logo}
        alt="логотип сайта."
      />
    </header>
  )
}
export default Header;
