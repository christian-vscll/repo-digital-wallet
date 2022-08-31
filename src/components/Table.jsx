import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';
import TableRow from './TableRow';

class Table extends Component {
  render() {
    const { wallet } = this.props;
    const despesas = wallet.expenses;
    console.log(despesas);
    return (
      <table id="mainTable">
        <thead>
          <tr className="tableHead">
            <th className="tableHeader">
              Descrição
            </th>
            <th className="tableHeader">
              Tag
            </th>
            <th className="tableHeader">
              Método de pagamento
            </th>
            <th className="tableHeader">
              Valor
            </th>
            <th className="tableHeader">
              Moeda
            </th>
            <th className="tableHeader">
              Câmbio utilizado
            </th>
            <th className="tableHeader">
              Valor convertido
            </th>
            <th className="tableHeader">
              Moeda de conversão
            </th>
            <th className="tableHeader">
              Editar/Excluir
            </th>
          </tr>
        </thead>
        <TableRow />
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  const { wallet } = state;
  return { wallet };
};

export default connect(mapStateToProps)(Table);

Table.defaultProps = { wallet: '' };

Table.propTypes = {
  wallet: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};
