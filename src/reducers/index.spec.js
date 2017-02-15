import reducer, { ADD_ITEM } from './';
import deepFreeze from 'deep-freeze';

describe('ADD_ITEM', () => {
  it('adds an item to the basket', () => {
    const initialState = deepFreeze({
      basket: []
    });

    const action = {
      type: ADD_ITEM,
      payload: {
        itemId: 'my-id'
      }
    };

    const expectedState = {
      basket: ['my-id']
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
