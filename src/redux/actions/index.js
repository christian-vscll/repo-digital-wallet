// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const userEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const DATA_WALLET = 'DATA_WALLET';
export const dataWallet = (state) => ({
  type: DATA_WALLET,
  currencies: state.currencies,
  expenses: state.expenses,
  editor: state.editor,
  idToEdit: state.idToEdit,
});

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  expenses,
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const requestCurrencies = (currencies) => ({
  type: REQUEST_CURRENCIES,
  currencies,
});
// export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
// export const FAILED_REQUEST_CURRENCIES = 'FAILED_REQUEST_CURRENCIES';
