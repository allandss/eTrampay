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
            <h2>Inscreva-se aqui e saiba mais sobre as opções de emprego no mundo <span> FITNESS</span> e <span>WELNESS</span></h2>
            <input type="text" className="form-control" placeholder="Nome" />
            <input type="text" className="form-control" placeholder="E-mail"/>
            <input type="text" className="form-control" placeholder="Celular"/>
            <Link href="/obrigado"><button className="btn">Quero participar</button></Link>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </Form>
  </>
);

export default withAnalytics()(Index);
