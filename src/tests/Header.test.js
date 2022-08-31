import React from 'react';
// import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWith';
import Header from '../components/Header';

test('1 - Se mapStateToProps foi chamada', () => {
  renderWithRouterAndRedux(<Header />);
  expect(mapStateToProps()).toHaveBeenCalled();
});
