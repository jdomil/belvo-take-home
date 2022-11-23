const express = require('express');
const belvo = require('belvo').default;
const bodyParser = require('body-parser');
const moment = require('moment');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

BELVO_SECRET_ID = process.env.BELVO_SECRET_ID;
BELVO_SECRET_PASSWORD = process.env.BELVO_SECRET_PASSWORD;
BELVO_ENV_URL = 'https://sandbox.belvo.com';

const client = new belvo(BELVO_SECRET_ID, BELVO_SECRET_PASSWORD, BELVO_ENV_URL);

// @route   GET /get_token
// @desc    Get access token from Connect Widget
app.get('/get_token', async (req, res) => {
  try {
    await client.connect();
    const response = await client.widgetToken.create();
    res.json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

// @route   POST /accounts
// @desc    Get accounts for a link id
app.post('/accounts', async (req, res) => {
  const { link_id } = req.body;

  try {
    await client.connect();
    const response = await client.accounts.retrieve(link_id);
    res.json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

// @route   POST /transactions
// @desc    Get all transactions for account related to link id
app.post('/transactions', async (req, res) => {
  const { link_id } = req.body;
  const date_from = moment().subtract(30, 'days').format('YYYY-MM-DD');
  const date_to = moment().format('YYYY-MM-DD');

  try {
    await client.connect();
    const response = await client.transactions.retrieve(
      link_id,
      date_from,
      date_to
    );
    res.json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

// @route   POST /balances
// @desc    Get all transactions for account related to link id
app.post('/balances', async (req, res) => {
  const { link_id } = req.body;
  const date_from = moment().subtract(30, 'days').format('YYYY-MM-DD');
  const date_to = moment().format('YYYY-MM-DD');

  try {
    await client.connect();
    const response = await client.balances.retrieve(
      link_id,
      date_from,
      date_to
    );
    res.json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
