import reducer, { ADD_ITEM } from './';
import deepFreeze from 'deep-freeze';

describe('ADD_ITEM', () => {
  it('updates the state', () => {
    const initialState = deepFreeze({
      basket: [],
      products: [{ id: 'red-brick' }]
    });

    const action = {
      type: ADD_ITEM,
      payload: {
        itemId: 'red-brick'
      }
    };

    const expectedState = {
      basket: ['red-brick'],
      products: [{ id: 'red-brick' }]
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
})
