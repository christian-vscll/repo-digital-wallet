import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWith';
import WalletForm from '../components/WalletForm';

test('1 - Se muda o valor dos inputs', () => {
  renderWithRouterAndRedux(<WalletForm />);

  const valor = screen.getByTestId('value-input');
  fireEvent.change(valor, { target: { value: 10 } });

  expect(valor.value).toBe('10');
});
