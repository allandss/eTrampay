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
              <h3>A eTrampay</h3>
              <h5>Apostamos em uma avaliação feita por vídeos e match</h5>
              <p>
              No cenário digital onde a presença de vídeos é cada vez mais constante, apostamos em uma proposta inovadora (feita por vídeos) onde o usuário se apresenta de forma mais clara e eficiente para sua vaga de emprego. Facilitando ao  empregador maior riqueza de detalhes na sua contratação. Os MATCH's e CHAT's facilitam ainda mais essa seleção.  
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img className="icon-about" src="/static/example.jpeg" alt=""/>
              <p>
              Vídeos exclusivos, rápidos  e práticos, feitos pelos usuários  para garantir o futuro emprego! 
              </p>
            </div>
            <div className="col-md-4">
            <img className="icon-about" src="/static/example.jpeg" alt=""/>
              <p>
              Através do dispositivo "MATCH" aproximamos ainda mais o  usuário  do empregador, tornando mais acertiva a oportunidade de emprego.
              </p>
            </div>
            <div className="col-md-4">
            <img className="icon-about" src="/static/example.jpeg" alt=""/>
              <p>
              Chat exclusivo para continuidade e comunicação da oportunidade de emprego entre as partes. 
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
              <p>Por meio de uma busca descolada e prática o eTRAMPAY a otimiza a pesquisa de seu futuro emprego no mundo FITNESS e WELLNESS, possibilitando oferecer seus serviços para o banco de dados das melhores empresas.</p>
              <input type="text" className="search-input" placeholder="Digite um cargo, área ou empresa" />
              <button type="button" className="btn-register"> Pesquisar</button>
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
            <p>A eTrampay criou um algoritmo de busca que torna mais eficiente e prática a pesquisa de novos candidatos para a sua vaga através de ferramentas inovadoras. </p>
            
              <button type="button" className="btn-register custom-register"> Pesquisar</button>
              <input type="text" className="search-input right" placeholder="Digite um cargo, área ou empresa" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="download">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>
                Em breve
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
