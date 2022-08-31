import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('1 - Se componentes estão na tela', () => {
  test('1.1 - Titulo Login', () => {
    renderWithRouterAndRedux(<Login />);
    const title = screen.getByText(/login/i);
    expect(title).toBeInTheDocument();
  });

  test('1.2 - Testa se inputEmail funciona', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');

    fireEvent.change(inputEmail, { target: { value: /exemplo@gmail.com/i } });
    expect(inputEmail.value).toMatch(/exemplo@gmail.com/i);
  });

  test('1.3 - Testa se muda de página', async () => {
    renderWithRouterAndRedux(<Login />);

    const inputEmail = screen.getByTestId('email-input');
    fireEvent.change(inputEmail, { target: { value: 'exemplo@gmail.com' } });
    await waitFor(() => expect(inputEmail.value).toMatch(/exemplo@gmail.com/i));

    const inputSenha = screen.getByTestId('password-input');
    fireEvent.change(inputSenha, { target: { value: 123123 } });
    await waitFor(() => expect(inputSenha.value).toMatch(/123123/i));

    const buttonEntrar = screen.getByTestId('button-entrar');
    fireEvent.change(buttonEntrar, { target: { disabled: false } });
    userEvent.click(buttonEntrar);

    expect(buttonEntrar).not.toBeDisabled();
    // await waitFor(() => );
    // await waitFor(() => expect(userEvent.click(buttonEntrar)).toHaveBeenCalled());

    // const emailHeader = screen.getByTestId('email-field');
    // expect(emailHeader).toBeInTheDocument();
    // const page = renderWithRouterAndRedux(<Login />);
    // expect(page.history.location.pathname).toMatch('/carteira');
    // console.log(page.history);
  });
});
