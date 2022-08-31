import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWith';
import Wallet from '../pages/Wallet';

test('1 - Se mapStateToProps foi chamada', () => {
  renderWithRouterAndRedux(<Wallet />);

  const emailField = screen.getByTestId('email-field');
  expect(emailField).toBeInTheDocument();
});
