import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { userEmail } from '../redux/actions';
import './Login.css';

class Login extends React.Component {
  state = {
    inputEmail: '',
    inputSenha: '',
    // buttonSubmit: true,
  };

  validateEmail = (email) => (
    String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  );

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleButton = () => {
    const { dispatch, history } = this.props;
    const { inputEmail } = this.state;
    dispatch(userEmail(inputEmail));
    history.push('/carteira');
  };

  render() {
    const { inputEmail, inputSenha } = this.state;
    const MIN_LEN_PSW = 6;

    return (
      <div className="containerLogin">
        <h2 className="titleLogin">Login</h2>
        <input
          type="email"
          data-testid="email-input"
          name="inputEmail"
          className="inputEmail input"
          value={ inputEmail }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="inputSenha"
          className="inputSenha input"
          value={ inputSenha }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          className="botaoEntrar input"
          data-testid="button-entrar"
          disabled={ !(
            this.validateEmail(inputEmail) !== null && inputSenha.length >= MIN_LEN_PSW
          ) }
          onClick={ this.handleButton }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

export default connect()(Login);
