import App from 'next/app';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import '../src/App.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ToastContainer autoClose={2000} />
        <Component {...pageProps}>
        </Component>
      </>
    );
  }
}
