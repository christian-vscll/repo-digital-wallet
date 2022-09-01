import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies, getExchangeRates } from '../services/currencyAPI';
import './WalletForm.css';
import { attExpense } from '../redux/actions';

class WalletForm extends Component {
  state = {
    currencies: '',
    inputValue: '',
    inputDescription: '',
    selectCurrency: 'USD',
    selectMethod: 'Dinheiro',
    selectCategory: 'Alimentação',
  };

  componentDidMount() {
    this.fetchCurrency();
  }

  fetchCurrency = async () => {
    const { dispatch } = this.props;
    await getCurrencies(dispatch);

    const { wallet } = this.props;
    // console.log(wallet);
    this.setState({ currencies: wallet.currencies });
  };

  handleButton = async () => {
    const { wallet } = this.props;
    const { expenses } = wallet;

    let id;
    if (expenses.length === 0) id = 0;
    else {
      const ultimaDespesa = expenses[expenses.length - 1];
      id = ultimaDespesa.id + 1;
    }

    // const id = ultimaDespesa.id + 1;
    const exchangeRates = await getExchangeRates();

    const {
      inputValue,
      inputDescription,
      selectCurrency,
      selectMethod,
      selectCategory,
    } = this.state;

    const objToSave = {
      id,
      value: inputValue,
      currency: selectCurrency,
      method: selectMethod,
      tag: selectCategory,
      description: inputDescription,
      exchangeRates,
    };

    this.saveToStore(objToSave);
  };

  saveToStore = (obj) => {
    const { dispatch, wallet } = this.props;
    wallet.expenses.push(obj);
    dispatch(attExpense(wallet.expenses));

    this.setState({
      inputValue: '',
      inputDescription: '',
      selectCurrency: 'USD',
      selectMethod: 'Dinheiro',
      selectCategory: 'Alimentação',
    });
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      inputValue,
      inputDescription,
      selectCurrency,
      selectMethod,
      selectCategory,
      currencies,
    } = this.state;
    // console.log(this.state);

    return (
      <form className="formWallet">
        <label
          className="labelFormWallet"
          htmlFor="inputValue"
        >
          Valor
          <input
            type="number"
            name="inputValue"
            data-testid="value-input"
            onChange={ this.handleChanges }
            value={ inputValue }
          />
        </label>

        <label
          className="labelFormWallet"
          htmlFor="inputDescription"
        >
          Descrição
          <input
            type="text"
            name="inputDescription"
            data-testid="description-input"
            onChange={ this.handleChanges }
            value={ inputDescription }
          />
        </label>

        {
          currencies !== '' && (
            <label
              className="labelFormWallet"
              htmlFor="selectCurrency"
            >
              Moeda
              <select
                className="select"
                name="selectCurrency"
                data-testid="currency-input"
                onChange={ this.handleChanges }
                value={ selectCurrency }
              >
                {
                  currencies.map((moeda) => (
                    <option key={ moeda }>{moeda}</option>
                  ))
                }
              </select>
            </label>
          )
        }

        <label
          className="labelFormWallet"
          htmlFor="selectMethod"
        >
          Método de pagamento
          <select
            onChange={ this.handleChanges }
            value={ selectMethod }
            className="select"
            name="selectMethod"
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label
          className="labelFormWallet"
          htmlFor="selectCategory"
        >
          Categoria
          <select
            onChange={ this.handleChanges }
            value={ selectCategory }
            className="select"
            name="selectCategory"
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button type="button" onClick={ this.handleButton }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, wallet } = state;
  return { user, wallet };
};

export default connect(mapStateToProps)(WalletForm);

WalletForm.defaultProps = {
  wallet: '',
};

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  wallet: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};
