import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWith';
import Header from '../components/Header';

test('1 - Se mapStateToProps foi chamada', () => {
  renderWithRouterAndRedux(<Header />);
  expect(mapStateToProps()).toHaveBeenCalled();
});
