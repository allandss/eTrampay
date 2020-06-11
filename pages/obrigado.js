import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import Banner from '../components/banner';
import { Form } from '../src/styles';

import withAnalytics from '../src/hocs/withAnalytics';

const Index = () => (
  <>
    <Head>
      <title>eTrampay - Inscrição</title>
    </Head>
    <Form>
      <div className="container">
        <div className="row">
        <div className="col-md-3"></div>
          <div className="col-md-6">
            <img src="/static/logo-white.png" alt="" className="logo"/>
            <div className="text">
              <h1>Parabéns!</h1>
              <h2><span>Obrigado por sua participação!</span></h2>
              <h6>Em breve entraremos em contato para maiores informações.</h6>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </Form>
  </>
);

export default withAnalytics()(Index);
