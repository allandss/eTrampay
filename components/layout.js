import React from 'react';

import Header from './header';
import Footer from './footer';
import Newsletter from './newsletter';


const Layout = props => {
  const { showBlack, children } = props;

  return (
    <div>
      <Header showBlack={showBlack} />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
