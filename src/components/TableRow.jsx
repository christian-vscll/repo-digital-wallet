import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { attExpense } from '../redux/actions';
import './Table.css';

class TableRow extends React.Component {
  handleDelete = (despesas, id) => {
    const { dispatch } = this.props;
    const filteredExpenses = despesas.filter((despesa) => despesa.id !== id);
    dispatch(attExpense(filteredExpenses));
  };

  render() {
    const { wallet } = this.props;
    const despesas = wallet.expenses;
    const MAX = 1000000000;

    return (
      <tbody className="tableBody">
        {
          despesas.map((despesa) => {
            const moeda = despesa.currency;
            const nameOfCoin = despesa.exchangeRates[moeda].name;
            const cambio = parseFloat(despesa.exchangeRates[moeda].ask);
            const keyAleatoria = (Math.random() * MAX);
            return (
              <tr key={ keyAleatoria } className="tableRow">
                <td className="tableCell">{despesa.description}</td>
                <td className="tableCell">{despesa.tag}</td>
                <td className="tableCell">{despesa.method}</td>
                <td className="tableCell">{parseFloat(despesa.value).toFixed(2)}</td>
                <td className="tableCell">{nameOfCoin}</td>
                <td className="tableCell">{ cambio.toFixed(2) }</td>
                <td className="tableCell">{(despesa.value * cambio).toFixed(2)}</td>
                <td className="tableCell">Real</td>
                <td className="tableCell">
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => {
                      this.handleDelete(despesas, despesa.id);
                    } }
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    );
  }
}

const mapStateToProps = (state) => {
  const { wallet } = state;
  return { wallet };
};

export default connect(mapStateToProps)(TableRow);

TableRow.defaultProps = {
  wallet: [],
};

TableRow.propTypes = {
  dispatch: PropTypes.func.isRequired,
  wallet: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};
