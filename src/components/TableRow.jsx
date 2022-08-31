import React from 'react';
import { PropTypes } from 'prop-types';
import './Table.css';

class TableRow extends React.Component {
  render() {
    const { expenses } = this.props;
    const despesas = expenses;
    // console.log(expenses);
    return (
      <tbody className="tableBody">
        {
          despesas.map((despesa) => {
            const moeda = despesa.currency;
            const nameOfCoin = despesa.exchangeRates[moeda].name;
            const cambio = parseFloat(despesa.exchangeRates[moeda].ask);
            console.log(despesa.exchangeRates[moeda]);
            return (
              <tr key={ despesa } className="tableRow">
                <td className="tableCell">{despesa.description}</td>
                <td className="tableCell">{despesa.tag}</td>
                <td className="tableCell">{despesa.method}</td>
                <td className="tableCell">{parseFloat(despesa.value).toFixed(2)}</td>
                <td className="tableCell">{nameOfCoin}</td>
                <td className="tableCell">{ cambio.toFixed(2) }</td>
                <td className="tableCell">{(despesa.value * cambio).toFixed(2)}</td>
                <td className="tableCell">Real</td>
                <td className="tableCell">Teste</td>
              </tr>
            );
          })
        }
      </tbody>
    );
  }
}

// Descrição
// Tag
// Método de pagamento
// Valor
// Moeda
// Câmbio utilizado
// Valor convertido
// Moeda de conversão
// Editar/Excluir

export default TableRow;

TableRow.defaultProps = {
  expenses: [],
};

TableRow.propTypes = {
  expenses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};
