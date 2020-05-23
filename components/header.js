import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Nav from './nav';
import { Header } from '../src/styles';


export default props => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <Header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link href="/">
            <img src="/static/logo-itrampay.png" alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler" onClick={toggleNav}>
            <span className="navbar-toggler-icon" />
          </button>
          
          <Nav></Nav>

        </nav>
      </div>
    </Header>
  );
};
