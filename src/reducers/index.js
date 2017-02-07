export const ADD_ITEM = 'shop/ADD_ITEM';

export const addItem = (itemId) => ({
  type: ADD_ITEM,
  payload: {
    itemId
  }
});

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        basket: [...state.basket, action.payload.itemId]
      });
    default:
      return state;
  }
};
