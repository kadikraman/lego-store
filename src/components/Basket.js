import React from 'react';
import { connect } from 'react-redux';

const Basket = ({ numItems }) => (
  <div className="basket">
    Basket: {numItems} {numItems === 1 ? 'item' : 'items'}
  </div>
);

const mapStateToProps = (state) => ({
  numItems: state.basket.length,
});

export default connect(mapStateToProps)(Basket);
