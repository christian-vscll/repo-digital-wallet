import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  state = {
    email: '',
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({ email: user.email });
  }

  handleDespesa = () => {
    const { wallet } = this.props;
    const { expenses } = wallet;
    const valores = expenses.map((despesa) => {
      const valor = parseInt(despesa.value, 10); // valor da despesa
      const { currency } = despesa; // moeda da despesa
      const moeda = despesa.exchangeRates[currency]; // cotação da moeda
      const novoValor = valor * moeda.ask; // conversão
      return novoValor;
    });
    let soma = 0;
    for (let index = 0; index < valores.length; index += 1) {
      soma += valores[index];
    }
    return soma.toFixed(2);
  };

  render() {
    const { email } = this.state;
    this.handleDespesa();

    return (
      <div className="headerWallet">
        <h3 className="h3" data-testid="email-field">
          {`Email: ${email}`}
        </h3>

        <label className="despesaTotal" htmlFor="totalField">
          Despesa Total: R$
          <h3 className="h3" name="totalField" data-testid="total-field">
            { this.handleDespesa() }
          </h3>
        </label>

        <h3 className="h3" data-testid="header-currency-field">
          BRL
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, wallet } = state;
  return { user, wallet };
};

export default connect(mapStateToProps)(Header);

Header.defaultProps = {
  user: '',
  wallet: '',
};

Header.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  wallet: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};
