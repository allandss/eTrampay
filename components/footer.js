import React from 'react';
import { Footer } from '../src/styles';
import Link from 'next/link';

export default () => (
  <Footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src="/static/logo-white.png" alt="Logo" className="img-fluid logo-footer" />
          <p>Uma forma descolada e dinâmica <br/>para encontrar seu emprego.</p>
        </div>
        <div className="col-md-3">
          <h4>Termos de uso</h4>
          <ul>
            <li>Privacidade</li>
            <li>Termos e condições</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4>Download</h4>
          <ul>
            <li>Google Play</li>
            <li>Apple Store</li>
          </ul>
        </div>
        <div className="col-md-3 social">
          <h4>Social media</h4>
          <p><img src="/static/icons/instagram.svg" alt="" /></p>
          <p><img src="/static/icons/twitter.svg" alt="" /></p>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <p>Copyright © eTrampay, Todos os direitos reservados - 2020</p>
      </div>
    </div>
    <script crossOrigin="anonymous" src="https://untorch.com/js/untorch.min.js" data-untorch-campaign="Toolblt"></script>
    <script crossOrigin="anonymous" src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" />
    <script crossOrigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" />
    <script crossOrigin="anonymous" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" />
  </Footer>
);
