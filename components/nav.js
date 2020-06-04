import React from 'react';
import Link from './link';

export default props => {
  let className = 'nav-item';
  const { showBlack } = props;
  if (showBlack) {
    className = 'nav-item-black';
  }
  return (
    <ul className="navbar-nav mr-auto">
      {/* <style jsx>{}</style> */}
      <Link activeClassName="active" href="/">
        <li className={className}>Ínicio</li>
      </Link>
      <Link activeClassName="active" href="#sobre">
        <li className={className}>Sobre</li>
      </Link>
      <Link activeClassName="active" href="#usuarios">
        <li className={className}>Usuário</li>
      </Link>
      <Link activeClassName="active" href="#empresa">
        <li className={className}>Empresa</li>
      </Link>
      {/* <Link activeClassName="active" href="/login">
        <li className={className}>Log in</li>
      </Link> */}
      <Link activeClassName="active" href="/inscricao">
        <li className="nav-item register">Inscreva-se</li>
      </Link>
    </ul>
  );
};
