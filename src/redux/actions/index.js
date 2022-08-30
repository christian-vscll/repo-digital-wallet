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
