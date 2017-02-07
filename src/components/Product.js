import React from 'react';

const Product = ({ src }) => (
  <div className="product">
    <img src={src} className="product-image" alt="product" />
    <button>Add to basket</button>
  </div>
);

export default Product;
