import React from 'react';
// import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';

test('', () => {
  renderWithRouterAndRedux(<App />);
  expect(createMemoryHistory).toHaveBeenCalled();
});
