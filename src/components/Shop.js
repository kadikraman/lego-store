import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../reducers';

const Shop = ({ products, onClick }) => (
  <div>
    {products.map(product => (
      <div className="product" key={product.id}>
        <img src={product.src} className="product-image" alt="product" />
        <button onClick={() => onClick(product.id)}>Add to basket</button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ onClick: addItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
