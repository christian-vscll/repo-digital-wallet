import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';
import TableRow from './TableRow';

class Table extends Component {
  state = { expenses: [] };

  componentDidMount() {
    const { wallet } = this.props;
    this.setState({ expenses: wallet.expenses });
  }

  render() {
    const { expenses } = this.state;
    const despesas = expenses;
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
        {/* <tbody> */}
        {
          expenses !== [] && (
            <TableRow expenses={ despesas } />
            // despesas.map((despesa) => {
            //   const moeda = despesa.currency;
            //   const { nameOfCoin } = despesa.exchangeRates[moeda];
            //   return (
            //     <tr key={ despesa }>
            //       <td>{despesa.description}</td>
            //       <td>{despesa.tag}</td>
            //       <td>{despesa.method}</td>
            //       <td>{despesa.value}</td>
            //       <td>{nameOfCoin}</td>
            //       {/* <td>{ despesa.cambio utilizado }</td>
            //       <td>{ despesa.valor convertido }</td>
            //       <td>{ despesa.moeda de conversão }</td> */}
            //     </tr>
            //   );
            // })
          )
        }
        {/* </tbody> */}
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
