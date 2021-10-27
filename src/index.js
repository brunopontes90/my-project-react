import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

ReactDom.render(
  <React.StrictMode>
    <Header/>
    <App/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);