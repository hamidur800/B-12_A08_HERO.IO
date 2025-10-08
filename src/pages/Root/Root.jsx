import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

export class Root extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  }
}

export default Root;
