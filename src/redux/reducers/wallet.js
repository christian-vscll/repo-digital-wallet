import { ATT_EXPENSE, DATA_WALLET, REQUEST_CURRENCIES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ATT_EXPENSE:
    return {
      ...state,
      expenses: action.expenses,
    };

  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };

  case DATA_WALLET:
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
      editor: action.editor,
      idToEdit: action.idToEdit,
    };

  default:
    return state;
  }
};

export default wallet;
