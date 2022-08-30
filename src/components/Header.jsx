import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  state = {
    email: '',
    // currencies: '',
    // expenses: '',
    // editor: '',
    // idToEdit: '',
    despesaTotal: 0,
  };

  componentDidMount() {
    const { user } = this.props;

    this.setState({
      email: user.email,
      // currencies: wallet.currencies,
      // expenses: wallet.expenses,
      // editor: wallet.editor,
      // idToEdit: wallet.idToEdit,
    });
  }

  render() {
    const { email, despesaTotal } = this.state;
    // console.log(email, currencies, expenses, editor, idToEdit);
    return (
      <div id="headerWallet">
        <h3 className="h3" data-testid="email-field">
          {`Email: ${email}`}
        </h3>

        <h3 className="h3" data-testid="total-field">
          {`Despesa Total: R$ ${despesaTotal}`}
        </h3>

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
  // wallet: '',
};

Header.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  // wallet: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.object,
  // ]),
};
