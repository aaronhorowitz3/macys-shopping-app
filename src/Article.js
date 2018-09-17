import React, { Component } from "react";
import img from "./blackdress.jpg";

class Article extends Component {
  render() {
    return (
      <article>
        <img src={img} id="blackdress" className="" alt="" />
      </article>
    );
  }
}
export default Article;
