import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';
import wallet from '../redux/reducers/wallet';

test('1 - ', () => {
  const { store } = renderWithRouterAndRedux(<App />);
  const state = store.getState().wallet;
  const actionTest = {
    type: 'ATT_EXPENSE',
    expenses: state.expenses,
  };

  const response = wallet(state, actionTest);
  const expected = { currencies: [], expenses: [], editor: false, idToEdit: 0 };
  expect(response).toStrictEqual(expected);
});
