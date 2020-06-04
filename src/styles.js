import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const Header = styled.header`
  font-family: Lato;
  height: 70px;
  line-height: 55px;
  position: absolute;
  width: 100%;
  z-index: 100;
  border: 1px solid rgba(193, 193, 193, 0.26);

  @media (max-width: 992px) {
    .container {
      max-width: 100%;
      padding: 0px;
    }

    .logo {
      margin-left: 30px;
    }

    .navbar-toggler {
      margin-right: 30px;
    }

    .navbar-collapse {
      background: rgba(10, 10, 10, 0.97);
      position: absolute;
      top: 69px;
      width: 100%;
      padding-bottom: 25px;
    }

    .register {
      line-height: 32px;
      height: 50px;
    }

    .active {
      color: #2270ba;
    }

    .active:after {
      content: '';
      height: 0px;
    }

    nav ul li {
      border-bottom: 1px solid #000;
    }
  }


  p.logout {
    position: absolute;
    right: 0;
    color: #2270ba;
    background: #fff;
    height: 40px;
    margin: 0px;
    line-height: 37px;
    border-radius: 30px;
    width: 100px;
    text-align: center;
    cursor: pointer;
  }

  .menu-left{
    width: 20px;
    margin-right: 20px;
  }

  .nav-logged{
    li{
      img{
        width: 22px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 8px;
      }
    }
    h2{
      font-size: 16px;
      margin-top: 4px;
    }

    .icon-search{
      max-width: 26px;
      display: block;
      margin-top: -2px;
      margin-left: 14px;
      cursor: pointer;
    }

    .search{
      position: absolute;
      right: 0px;
      top: 71px;
      border-radius: 3px;
      border: 1px solid #2270ba;
      height: 45px;
      width: 230px;
      padding: 0px 12px;
    }
  }

  .logo {
    max-width: 170px;
    margin-top: 0px;
    cursor: pointer;
  }

  .bg-light {
    background-color: transparent !important;
    padding: 0;
  }

  .navbar-nav {
    margin-left: auto !important;
    margin-right: 0px !important;
  }

  .navbar {
    height: 68px;

    .user {
      img {
        width: 40px;
        border-radius: 20px;
        box-shadow: 3px 2px 7px 3px rgba(103, 103, 103, 0.09);
      }
    }

    .notification {
      .detail {
        position: absolute;
        background: #2270ba;
        width: 20px;
        height: 20px;
        line-height: 17px;
        border-radius: 20px;
        margin-left: 48px;
        font-size: 12px;
        top: 12px;
        padding: 1px;
      }
      img {
        width: 24px;
      }
    }
  }

  .active:after {
    content: '';
    min-width: 40px;
    width: 100%;
    height: 4px;
    background: #2270ba;
    display: block;
    margin-top: 6px;
    margin-left: auto;
    margin-right: auto;
  }

  .register .active:after {
    display: none;
  }

  .register {
    background: #2270ba;
    padding: 7px 20px 12px 20px;
    line-height: 23px;
    border-radius: 60px;
    height: 40px;
    margin-top: 13px;
    opacity: 0.9;
  }

  nav ul li {
    display: inline-block;
    margin: 0px 15px;
    min-width: 40px;
    text-align: center;
    margin-top: 5px;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  .nav-item-black {
    color: black;
  }

  .navbar-light .navbar-toggler {
    background: rgba(15, 15, 18, 0.58);
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(34, 112, 186)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
`;

export const Home = styled.div`
  .about {
    background: #f1f1f1;
    padding-bottom: 50px;
  }

  .about .item {
    background: #fff;
    margin-top: -90px;
    padding: 20px 25px;
    margin: -90px 15px 15px 15px;
    box-shadow: 3px 2px 7px 3px rgba(103, 103, 103, 0.07);
    height: 230px;
  }

  .about .item h2 {
    font-size: 26px;
    font-weight: 600;
    color: #777;
    margin-top: 20px;
  }

  .about .item h2 span {
    color: #2270ba;
    display: block;
    font-size: 26px;
  }

  .about .item span {
    font-family: Lato;
    font-size: 16px;
    color: #616161;
  }

  .about h3 {
    margin-top: 70px;
    color: #2270ba;
    font-weight: 600;
    font-size: 20px;
  }

  .about h5 {
    font-weight: 600;
    margin-top: 15px;
    font-size: 22px;
  }

  .about p {
    font-family: Lato;
    margin: 25px 0px;
    text-align: center;
  }

  .about button {
    background: #2270ba;
    padding: 10px 30px;
    border-radius: 30px;
    border: 0px;
    color: #fff;
    font-family: Lato;
    font-weight: 500;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  .call-to-action-contractor {
    padding: 100px 0px;
    background: #2270ba;
    color: #fff;
    background-repeat: no-repeat;
    background-position-x: right;
  }

  .call-to-action-contractor button:hover {
    text-decoration: none;
  }

  .call-to-action-contractor h3 {
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  .call-to-action-contractor p {
    font-family: Lato;
    margin-bottom: 40px;
  }

  .call-to-action-contractor button {
    font-size: 14px;
    background: #fff;
    line-height: 43px;
    text-align: center;
    border: 0px;
    width: 100px;
    border-radius: 50px;
    height: 46px;
    color: #2270ba;
    display: block;
    font-weight: 600;
    font-family: Lato;
    box-shadow: 3px 2px 7px 3px rgba(103, 103, 103, 0.07);
    float: left;
    cursor: pointer;
  }

  .call-to-action-company {
    padding: 100px 0px;
    background: #fff;
    color: #fff;
    background-repeat: no-repeat;
    background-position-x: left;
    color: #000;
    text-align: right;
  }

  .call-to-action-company h3 {
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  .call-to-action-company p {
    font-family: Lato;
    margin-bottom: 30px;
  }

  .call-to-action-company button {
    color: #fff !important;
    line-height: 42px;
    text-align: center;
    border: 0px;
    width: 100px;
    border-radius: 50px;
    height: 46px;
    background-color: #2270ba;
    display: block;
    font-weight: 500;
    font-family: Lato;
    box-shadow: 3px 2px 7px 3px rgba(103, 103, 103, 0.07);
    float: right;
    cursor: pointer;
  }

  .call-to-action-company .btn-register{
    border: 2px solid #fff;
    background: #2370ba;
    color: #ffffff;
    line-height: 30px;
    border-radius: 0px 50px 50px 0px;
    margin-left: -50px;
    height: 52px;
  }

  .call-to-action-contractor .btn-register{
    border: 2px solid #fff;
    background: #2370ba;
    color: #ffffff;
    line-height: 30px;
    border-radius: 0px 50px 50px 0px;
    margin-left: -50px;
    height: 52px;
  }

  .call-to-action-company button:hover {
    text-decoration: none;
  }

  .download {
    padding: 30px 0px 50px 0px;
    background: #f1f1f1;
    text-align: right;
  }

  .download .app {
    float: left;
    border-radius: 30px;
    max-width: 230px;
  }

  .download h2 {
    font-size: 38px;
    margin-top: 90px;
    font-weight: 600;
    margin-bottom: 40px;
    span{
      font-weight: 100;
    }
    }
  }

  .download p {
    font-family: Lato;
    margin-bottom: 45px;
  }

  .download .buttons img {
    margin-left: 15px;
    max-height: 60px;
  }

  @media (max-width: 992px) {
    .call-to-action-contractor {
      background-size: 370px;
      padding: 40px 0px;
    }

    .call-to-action-contractor h3 {
      font-size: 30px;
      margin-top: 0px;
    }

    .call-to-action-company {
      background-size: 370px;
      padding: 40px 0px;
    }

    .call-to-action-company h3 {
      font-size: 30px;
      margin-top: 0px;
    }

    .download .buttons img {
      max-height: 50px;
      margin-top: 10px;
    }

    .about .item {
      padding: 5px 25px;
      margin: -80px 15px 15px 15px;
      height: 218px;
    }
  }

  @media (max-width: 767px) {
    .call-to-action-company,
    .call-to-action-contractor {
      background-image: none;
      background-image: none !important;
    }

    .download h2 {
      font-size: 30px;
      margin-top: 35px;
      font-weight: 600;
      text-align: center;
    }

    .download p {
      text-align: center;
    }

    .download .buttons {
      text-align: center;
      margin-bottom: 30px;
    }

    .download .app {
      float: none;
      max-width: 230px;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  }
`;

export const Banner = styled.div`
  color: #fff;
  padding-top: 30vh;
  text-align: center;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url('/static/banner-home.png');
  padding-bottom: 80px;
  background-position: center;

  img{
    max-width: 100px;
  }

  img.logo {
    max-width: 250px;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  .lead {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 30px;
  } 
  .subtitle{
    font-size: 22px;
    margin: 15px 0px 35px 0px;
    font-weight: 100;
    span{
      font-weight: 800;
      padding: 4px 10px 8px;
      border: 1px solid #fff;
      border-radius: 4px;
    }
  }
  h2{
    font-size: 20px;
    margin-bottom: 30px;
    span{
      color: #2270ba;
      font-weight: 800;
      display: block;
      font-size: 17px;
      margin-top: 8px;
    }
  }
  h5{
    text-align: center;
    font-size: 47px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 59px;
    span{
      color: #2270ba;
    }
  }
`;



export const Form = styled.div`
  color: #fff;
  padding-top: 80px;
  text-align: center;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url('/static/banner-home.png');
  padding-bottom: 80px;
  background-position: center;

  img.logo {
    max-width: 250px;
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  h2{
    font-size: 28px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: 600;
    margin-top: 30px;
    text-align: left;
    span{
      color: #2270ba;
    }
  }
  h5{
    text-align: center;
    font-size: 47px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 59px;
    span{
      color: #2270ba;
    }
  }
  .form-control{
    height: 50px;
    border-radius: 4px;
    margin-bottom: 10px;
    border: 0px;
    padding-left: 20px;
    font-size: 14px;
  }
  .btn{
    height: 50px;
    width: 100%;
    background: #2370ba;
    color: #fff;
    font-size: 17px;
  }

  .text{
    h1{
      font-size: 50px;
      text-transform: uppercase;
      margin-top: 50px;
      padding-left: 20px;
      text-align: center;
    }
    h2{
      span{
        color: #2270ba;
        text-align: center;
        width: 100%;
        display: block;
      }
    }
    h6{
      font-size: 22px;
      text-align: center;
      line-height: 30px;
      font-weight: 400;
    }
  }
`;

export const Footer = styled.footer`
  font-family: Lato;
  background: #47525e;
  color: #fff;
  padding-top: 80px;
  padding-bottom: 0px;
  background: #100f12;

  ul {
    list-style-type: none;
    margin-bottom: 50px;
    padding-inline-start: 0px;
  }

  ul li {
    line-height: 30px;
  }

  .social img {
    width: 19px;
    margin-left: 4px;
  }

  p {
    margin-top: 10px;
    font-size: 15px;
  }

  h4 {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 22px;
  }

  .logo-footer {
    max-width: 150px;
    margin-top: 0px;
    width: 100%;
    margin-bottom: 10px;
  }

  .copyright {
    height: 80px;
    border: 1px solid #212121;
    text-align: center;
  }

  .copyright p {
    font-size: 13px;
    margin-top: 30px;
  }

  .social p {
    background: #fff;
    display: inline-block;
    border-radius: 30px;
    padding: 5px;
    width: 38px;
    margin-right: 15px;
    height: 38px;
  }

  @media (max-width: 992px) {
    ul {
      padding-inline-start: 0px;
    }
  }

  @media (max-width: 767px) {
    .social {
      text-align: center;
      margin-bottom: 30px;
    }

    .social img {
      margin-left: 0px;
    }

    p {
      margin-bottom: 40px;
    }
  }
`;

export const Newsletter = styled.div`
  background: #1c1c1f;
  height: 135px;
  padding-top: 40px;
  color: #fff;

  h4 {
    font-size: 20px;
    margin-bottom: 0px;
  }

  h2 {
    font-size: 30px;
    color: #2270ba;
    font-weight: 600;
    margin-bottom: 0px;
  }

  input {
    height: 58px;
    border: 0px;
    border-radius: 30px;
    padding-left: 40px;
    width: 100%;
    background: #100f12;
    font-family: Lato;
    color: #fff;
  }

  input::placeholder {
    color: #fff;
  }

  button {
    position: absolute;
    cursor: pointer;
    right: 40px;
    margin-top: 11px;
    background-color: transparent;
    border: 0px;
    img {
      width: 20px;
    }
  }

  @media (max-width: 767px) {
    height: 230px;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }
  }
`;

export const PageForm = styled.div`
  background: #fff;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  .title {
    max-width: 800px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    color: #2270ba;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 20px;
  }

  .content {
    max-width: 900px;
    background: #f3f3f3;
    padding: 20px 40px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    margin-bottom: 50px;

    h5 {
      font-size: 19px;
      font-weight: 600;
      line-height: 60px;
      color: #353535;
    }
  }

  .box-about {
    min-height: 100vh;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .box {
    padding: 80px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .box h3 {
    margin-top: 50px;
    margin-bottom: 40px;
    font-size: 24px;
    text-align: center;
  }

  .box h1 strong {
    color: #2270ba;
  }

  .text-info{
    color: #000 !important;
    float: left;
    margin-top: 13px;
  }

  .left {
    float: left;
  }

  h5 {
    font-size: 15px;
  }

  h1 {
    font-size: 24px;
    font-weight: 800;
    text-align: center;
  }

  h5 span {
    color: #2270ba;
    display: inline;
    font-size: 15px;
    cursor: pointer;
  }

  .forgot {
    float: right;
    font-size: 13px;
    span {
      color: #2270ba;
    }
  }

  button.send {
    background: #2270ba;
    color: #fff;
    border: 0px;
    border-radius: 3px;
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .label {
    margin-bottom: 5px;
    font-size: 15px;
  }

  .form-control {
    height: 50px;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 13px;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #2270ba;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.16);
  }

  button.back {
    background: #fff;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 25px;
    left: 30px;
    border-radius: 30px;
    border: 1px solid #ddd;
  }

  button.back img {
    width: 12px;
    height: 12px;
    float: left;
    margin-left: 5px;
  }

  .register form > span {
    display: block;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 13px;
    color:#2270ba;
  }

  form .row .col-md-6 > span {
    display: block;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #2270ba;
  }

  .sign-in {
    text-align: center;
    margin-top: 50px;
    width: 100%;
    float: left;
    margin-bottom: 30px;
  }

  .next {
    padding: 10px;
    min-width: 120px;
    border-radius: 4px;
    border: 2px solid #f1853b;
    background: #f1853b;
    color: #fff;
    font-weight: 600;
    float: right;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  .previous {
    padding: 10px;
    min-width: 120px;
    border-radius: 4px;
    background: #fff;
    color: #f1853b;
    font-weight: 600;
    float: left;
    border: 2px solid #2270ba;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  .role {
    margin-bottom: 35px;
    width: 280px;
    margin-left: auto;
    margin-right: auto;

    li {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      padding: 8px;
      width: 100px;
      border-radius: 30px;
      text-align: center;
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
      color: #2270ba;
      font-weight: 500;
      border: 2px solid #2270ba;
    }
  }

  .type-radio {
    span {
      display: block;
      margin-top: 0px;
      margin-bottom: 8px;
      font-size: 13px;
      color: #2270ba;
    }
    label {
      padding: 0px 8px;
      margin-right: 10px;
    }
  }

  span {
    display: block;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 13px;
    color: #2270ba;
  }

  .role .active {
    background: #2270ba;
    color: #fff;
  }

  .step {
    display: none;
  }

  .step1 {
    display: block;
  }

  .register {
    .box h3 {
      span {
        color: #2270ba;
        display: inline;
        font-size: 24px;
      }
    }
  }

  .logo {
    width: 180px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .radio {
    float: right;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 13px;
  }

  .label-radio {
    margin-bottom: 10px;
    margin-top: 12px;
  }

  .mgT15 {
    margin-top: 15px;
  }

  textarea {
    min-height: 80px;
  }

  span.error {
    font-size: 13px;
    display: block;
    margin-bottom: 4px;
    color: red;
    margin-top: -5px;
  }

  .alert-error {
    padding: 10px 30px;
    border-radius: 4px;
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    font-size: 13px;
    display: none;
  }

  @media (max-width: 992px) {
    .box {
      padding: 80px 20px;
    }

    .box-about {
      display: none;
    }

    h1 {
      text-align: center;
      margin-top: 15px;
    }
  }
`;

export const Avatar = styled.div`
  align-self: center;
  margin-top: 30px;

  label{
    cursor: pointer;
    width: 100%;

    &:hover{
      opacity: 0.7;
    }

    img{
      height: 100px;
      width: 100px;
      border-radius: 50%;
      border: 3px solid rgba(255,255,255,0.3);
      background: #eee;
      margin: 0px auto 0px auto;
      display: block;
    }

    input{
      display: none;
    }

    p{
      text-align: center;
      text-transform: uppercase;
      font-size: 12px;
      color: #a2a2a2;
      margin: 8px 0px 0px 0px;
    }

  }

}`;

export const Subheader = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(/static/banner-home-02.jpg);

  h3 {
    color: #fff;
    span {
      font-size: 17px;
      color: #2270ba;

      b {
        color: #fff;
      }
    }
  }

  button {
    background: #2270ba;
    color: #fff;
    padding: 10px 20px;
    border: 0px;
    border-radius: 4px;
    font-size: 16px;
    float: right;
    margin-top: 2px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const CompanyContractorInfo = styled.div`
  padding: 0;

  .signup {
    margin-top: 15px;
    button {
      background: #2270ba;
      padding: 10px 30px;
      border-radius: 30px;
      border: 0px;
      color: #fff;
      font-family: Lato;
      font-weight: 500;
      line-height: 30px;
      margin-top: 15px;
      margin-bottom: 20px;
      font-size: 14px;
      cursor: pointer;
    }
  }

  h3{
    color: #2270ba;
    margin-top: 50px;
    font-weight: 600;
  }

  .info-section-bottom{
    margin-bottom: 25px;
    margin-top: 14px;

    h3{
      margin-top: 40px;
    }
    span{
      text-align: center;
      width: 100%;
      display: block;
      margin-top: 40px;
      font-size: 20px;
    }
    button{
      float: right;
    }
  }

  .main {
    min-height: 500px;
    background: #f1f1f1;
    padding: 60px 0px;
  }

  span {
    margin-left: 15px;
  }

  h5{
    float: left;
    margin-top: 93px;
    font-size: 55px;
    font-weight: 600;
    color: #ffffff;
    position: absolute;
    max-width: 200px;
  }

  .how-it-slider {
    padding-bottom: 45px;
    background: #2270ba;
    padding-top: 30px;

    .slider-item {
      figure {
        display: flex;
        justify-content: center;
        img {
          height: 350px;
        }
      }
    }

    .how-it-container {
      display: flex;
      justify-content: center;
    }

    .how-it-content {
      width: 500px;
    }
  }

  .info-section {
    padding-top: 20px;
  }

  .row {
    justify-content: center;
  }

  .compImage {
    display: flex;
    justify-content: center;
    figure.item {
      vertical-align: top;
      display: inline-block;
      text-align: center;
      width: 120px;
    }

    figure {
      img {
        width: 80px;
        height: 80px;
      }
      .caption {
        display: block;
      }
    }
  }
`;
