import React, { Component } from "react";
import Article from "./Article";
import Aside from "./Aside";

class Main extends Component {
  render() {
    return (
      <main>
        <Article />
        <Aside />
      </main>
    );
  }
}
export default Main;
