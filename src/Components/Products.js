import React, { Component } from "react";

export class Products extends Component {
  state = {
    productsData: [
      {
        level: "TENOR TROMBONE",
        price: "$600",
        p1: "Lorem ipusum.",
        p2: "Lorem ipusum.",
        p3: "Lorem ipusum dolor.",
        p4: "Lorem ipusum."
      },
      {
        level: "BASS TROMBONE",
        price: "$900",
        p1: "Lorem ipusum.",
        p2: "Lorem ipusum.",
        p3: "Lorem ipusum dolor.",
        p4: "Lorem ipusum."
      },
      {
        level: "VALVE TROMBONE",
        price: "$1200",
        p1: "Plays similar to a Trumpet.",
        p2: "Great for Jazz Bands",
        p3: "Lorem ipusum dolor.",
        p4: "Lorem ipusum."
      }
    ]
  };

  render() {
    return this.state.productsData.map(product => (
      <div>
        <div id="product">
          <div id="level">{product.level}</div>
          <h2>{product.price}</h2>
          <p> {product.p1}</p>
          <p> {product.p2}</p>
          <p> {product.p3}</p>
          <p> {product.p4}</p>
          <button>SELECT</button>
        </div>
      </div>
    ));
  }
}

export default Products;
