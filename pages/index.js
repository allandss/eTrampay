import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import Banner from '../components/banner';
import { Home } from '../src/styles';

import withAnalytics from '../src/hocs/withAnalytics';

const Index = () => (
  <Layout>
    <Head>
      <title>eTrampay - Home</title>
    </Head>
    <Home>
      <Banner />
      <div className="about" id="sobre">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>A ETRAMPAY</h3>
              <h5>Apostamos em uma avaliação feita por vídeos e match</h5>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img className="icon-about" src="/static/icons/video.svg" alt=""/>
              <p>
              Texto sobre os vídeos, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. 
              </p>
            </div>
            <div className="col-md-4">
            <img className="icon-about" src="/static/icons/human.svg" alt=""/>
              <p>
              Texto sobre o match, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. 
              </p>
            </div>
            <div className="col-md-4">
            <img className="icon-about" src="/static/icons/chat.svg" alt=""/>
              <p>
              Texto sobre o chat, orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="call-to-action-contractor" id="usuarios"
        style={{ backgroundImage: "url('/static/users2.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3>
                Encontre
                <strong> seu emprego</strong>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <Link href="">
                <button type="button" className="btn-register"> Criar conta</button>
              </Link>
            </div>
            <div className="col-md-5" />
          </div>
        </div>
      </div>

      <div
        className="call-to-action-company" id="empresa"
        style={{ backgroundImage: "url('/static/background-2.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5" />
            <div className="col-md-7">
            <h3>Encontre <strong>canditados</strong></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link href="">
                <button type="button">Criar conta</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="download">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>
                Baixe agora
                <br />
                <span>disponível nas lojas</span>
              </h2>
              <div className="buttons">
                <img src="/static/app-store.jpg" alt="" />
                <img src="/static/play-store.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <img className="app" src="/static/app.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Home>
  </Layout>
);

export default withAnalytics()(Index);
