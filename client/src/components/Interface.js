import React, { useState } from 'react';
import axios from 'axios';

const Interface = (props) => {
  const { link } = props;

  const [belvoData, setBelvoData] = useState({
    accounts: [],
    transactions: [],
    balances: [],
  });

  const retrieveAccounts = async () => {
    try {
      const response = await axios.post('/accounts', { link_id: link });
      setBelvoData({ accounts: response.data });
      console.log(belvoData.accounts);
    } catch (error) {
      console.error(error.message);
    }
  };

  const retrieveTransactions = async () => {
    try {
      const response = await axios.post('/transactions', { link_id: link });
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const { accounts, transactions, balances } = belvoData;

  if (!link) {
    return null;
  }

  return (
    <div>
      <div className='mt-5 main-section'>
        <p>Your accounts have been linked</p>
      </div>
      <hr />
      <p>LINK ID</p>
      <p>{link}</p>
      <div className='p-4 endpoints-section'>
        <p>ENDPOINTS</p>
        <div className='d-flex flex-column justify-content-between endpoints-container'>
          <div className='container mb-5 endpoints-card accounts'>
            <div className='row'>
              <div className='col-1'>
                <div className='endpoint-card_method'>
                  <p>POST</p>
                </div>
              </div>
              <div className='col-8 container'>
                <div className='row'>
                  <div className='col-sm-auto'>
                    <p>Accounts</p>
                  </div>
                  <div className='col-sm-auto'>
                    <p>/api/accounts</p>
                  </div>
                </div>
                <div className='row'>
                  <p>
                    Retrieve the information from all the Accounts for the Link
                    ID
                  </p>
                </div>
              </div>
              <div className='col-3'>
                <button
                  type='button'
                  className='btn btn-dark'
                  onClick={retrieveAccounts}
                >
                  Send Request
                </button>
              </div>
            </div>
            <div className='row'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Account Number</th>
                    <th scope='col'>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <tr>
                      <td>{account.name}</td>
                      <td>{account.number}</td>
                      <td>{account.balance.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='container endpoints-card transactions'>
            <div className='row'>
              <div className='col-1'>
                <div className='endpoint-card_method'>
                  <p>POST</p>
                </div>
              </div>
              <div className='col-8 container'>
                <div className='row'>
                  <div className='col-sm-auto'>
                    <p>Transactions</p>
                  </div>
                  <div className='col-sm-auto'>
                    <p>/api/transactions</p>
                  </div>
                </div>
                <div className='row'>
                  <p>
                    Retrieve the transactions from the last 30 days from each
                    one of the Accounts for the Link ID
                  </p>
                </div>
              </div>
              <div className='col-3'>
                <button
                  type='button'
                  className='btn btn-dark'
                  onClick={retrieveTransactions}
                >
                  Send Request
                </button>
              </div>
            </div>
            <div className='row'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Account Number</th>
                    <th scope='col'>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <tr>
                      <td>{account.name}</td>
                      <td>{account.number}</td>
                      <td>{account.balance.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
