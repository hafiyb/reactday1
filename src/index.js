import React from 'react';
import ReactDOM from 'react-dom';
import Header from './container/header/index';
import Main from './container/main/index'
import Works from './container/works/index'
import Download from './container/download/index'
import Connecting from './container/connecting/index'
import Subscribe from './container/subscribe/index'
import Footer from './container/footer/index'
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Works />
    <Download />
    <Connecting />
    <Subscribe />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
