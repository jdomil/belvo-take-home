import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const Interface = (props) => {
  const { link, reset } = props;

  const [belvoData, setBelvoData] = useState({
    accounts: [],
    transactions: [],
    balances: [],
  });

  const [apiErrors, setErrors] = useState({
    accountsErrors: [],
    transactionsErrors: [],
    balancesErrors: [],
  });

  const retrieveAccounts = async () => {
    try {
      const response = await axios.post('/accounts', { link_id: link });
      setBelvoData({ accounts: response.data, transactions: [], balances: [] });
    } catch (error) {
      console.error(error.message);
      setErrors({
        accountsErrors: error.message,
        transactionsErrors: [],
        balancesErrors: [],
      });
    }
  };

  const renderAccounts = (accountsArray, accountsErrorsString) => {
    if (accountsErrorsString.length !== 0) {
      return (
        <div className='alert alert-danger' role='alert'>
          {accountsErrorsString}
        </div>
      );
    }

    if (accountsArray.length === 0) return null;

    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Account Number</th>
            <th scope='col'>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountsArray.map((account) => (
            <tr>
              <td>{account.name}</td>
              <td>{account.number}</td>
              <td>{account.balance.current}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const retrieveTransactions = async () => {
    try {
      const response = await axios.post('/transactions', { link_id: link });
      setBelvoData({ accounts: [], transactions: response.data, balances: [] });
    } catch (error) {
      console.error(error.message);
      setErrors({
        accountsErrors: [],
        transactionsErrors: error.message,
        balancesErrors: [],
      });
    }
  };

  const renderTransactions = (transactionsArray, transactionsErrorsString) => {
    if (transactionsErrorsString.length !== 0) {
      return (
        <div className='alert alert-danger' role='alert'>
          {transactionsErrorsString}
        </div>
      );
    }

    if (transactionsArray.length === 0) return null;

    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Business</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionsArray.map((transaction) => (
            <tr>
              <td>{transaction.merchant.name}</td>
              <td>{transaction.amount}</td>
              <td>{formatDate(transaction.collected_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const retrieveBalances = async () => {
    try {
      const response = await axios.post('/balances', { link_id: link });
      setBelvoData({ accounts: [], transactions: [], balances: response.data });
    } catch (error) {
      console.error(error.message);
      setErrors({
        accountsErrors: [],
        transactionsErrors: [],
        balancesErrors: error.message,
      });
    }
  };

  const renderBalances = (balancesArray, balancesErrorsString) => {
    if (balancesErrorsString.length !== 0) {
      return (
        <div className='alert alert-danger' role='alert'>
          {balancesErrorsString}
        </div>
      );
    }

    if (balancesArray.length === 0) return null;

    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Account Name</th>
            <th scope='col'>Balance</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {balancesArray.map((balance) => (
            <tr>
              <td>{balance.account.name}</td>
              <td>{balance.balance}</td>
              <td>{formatDate(balance.collected_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const formatDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
  };

  const resetInterface = () => {
    setBelvoData({ accounts: [], transactions: [], balances: [] });
    reset();
  };

  const { accounts, transactions, balances } = belvoData;
  const { accountsErrors, transactionsErrors, balancesErrors } = apiErrors;

  if (!link) {
    return null;
  }

  return (
    <div>
      <div className='mt-5 main-section'>
        <div className='d-flex justify-content-between'>
          <p>Your accounts have been linked</p>
          <button
            type='button'
            className='btn btn-primary'
            onClick={resetInterface}
          >
            Reset
          </button>
        </div>
      </div>
      <hr />
      <div className>
        <div>
          <p>LINK ID</p>
          <p>{link}</p>
        </div>
      </div>
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
              {renderAccounts(accounts, accountsErrors)}
            </div>
          </div>
          <div className='container mb-5 endpoints-card transactions'>
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
              {renderTransactions(transactions, transactionsErrors)}
            </div>
          </div>
          <div className='container mb-5 endpoints-card balances'>
            <div className='row'>
              <div className='col-1'>
                <div className='endpoint-card_method'>
                  <p>POST</p>
                </div>
              </div>
              <div className='col-8 container'>
                <div className='row'>
                  <div className='col-sm-auto'>
                    <p>Balances</p>
                  </div>
                  <div className='col-sm-auto'>
                    <p>/api/balances</p>
                  </div>
                </div>
                <div className='row'>
                  <p>
                    Retrieve the last 30 days daily balance for all the Accounts
                    for the Link ID
                  </p>
                </div>
              </div>
              <div className='col-3'>
                <button
                  type='button'
                  className='btn btn-dark'
                  onClick={retrieveBalances}
                >
                  Send Request
                </button>
              </div>
            </div>
            <div className='row'>
              {renderBalances(balances, balancesErrors)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
