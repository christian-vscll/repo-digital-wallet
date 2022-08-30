import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import getCurrencies from '../services/currencyAPI';
import './WalletForm.css';

class WalletForm extends Component {
  state = { currencies: '' };

  componentDidMount() {
    this.fetchCurrency();
  }

  fetchCurrency = async () => {
    const { dispatch } = this.props;
    await getCurrencies(dispatch);

    const { wallet } = this.props;
    this.setState({
      currencies: wallet.currencies,
    });
  };

  render() {
    const { currencies } = this.state;
    console.log(currencies);
    return (
      <form id="formWallet">
        <label className="labelFormWallet" htmlFor="inputValue">
          Valor
          <input type="number" name="inputValue" data-testid="value-input" />
        </label>

        <label className="labelFormWallet" htmlFor="inputDescription">
          Descrição
          <input type="text" name="inputDescription" data-testid="description-input" />
        </label>

        {
          currencies !== '' && (
            <label className="labelFormWallet" htmlFor="selectCurrency">
              Moeda
              <select
                className="select"
                name="selectCurrency"
                data-testid="currency-input"
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

        <label className="labelFormWallet" htmlFor="selectMethod">
          Método de pagamento
          <select className="select" name="selectMethod" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label className="labelFormWallet" htmlFor="selectCategory">
          Método de pagamento
          <select className="select" name="selectCategory" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
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
