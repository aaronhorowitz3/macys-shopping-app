import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div id="topBar">
          <p>Don&apos;t forget to check the sale section! Promo ending soon!</p>
        </div>
        <h2>Aaron&apos;s Attire</h2>
        <nav>
          <a href="">New Arrivals</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">Beauty</a>
          <a href="">Shoes</a>
          <a href="">Accessories</a>
          <a href="" id="saleNav">
            Sale
          </a>
        </nav>
      </header>
    );
  }
}
export default Header;
