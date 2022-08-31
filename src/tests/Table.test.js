import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWith';
import Table from '../components/Table';

test('1 - Se a div principal aparece na tela', () => {
  renderWithRouterAndRedux(<Table />);

  const divPrincipal = screen.getByText('Table');
  expect(divPrincipal).toBeInTheDocument();
});
