import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

const Shop = ({ products }) => (
  <div>
    {products.map(p => <Product src={p.src} key={p.id} />)}
  </div>
);

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Shop);
