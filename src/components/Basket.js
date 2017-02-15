import React from 'react';
import { connect } from 'react-redux';

const Basket = ({ numItems, name }) => (
  <div className="basket">
    Hello, {name}, you have {numItems} {numItems === 1 ? 'item' : 'items'} in your basket.
  </div>
);

const mapStateToProps = (state) => ({
  numItems: state.basket.length,
  name: state.user.name,
});

export default connect(mapStateToProps)(Basket);
