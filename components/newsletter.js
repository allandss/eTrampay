import React from 'react';
import { Newsletter } from '../src/styles';

export default () => (
  <Newsletter>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          
          <h2>Newsletter</h2>
          <h4>Fique por dentro das novidades</h4>
        </div>
        <div className="col-md-6">
          <input placeholder="Informe seu e-mail" type="text" data-untorch-element="email" />
          <button data-untorch-element="submit"><img src="/static/icons/send.svg" alt="" /></button>
          <div class="alert-message" data-untorch-element="alert"></div>
        </div>
      </div>
    </div>
  </Newsletter>
);