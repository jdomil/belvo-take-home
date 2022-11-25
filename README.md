# Belvo Customer Engineer Demo App

## Description

This is a demo application for the Customer Support Engineer role at Belvo. The app makes use of the Belvo features below:

1. [Belvo Connect Widget](https://developers.belvo.com/docs/connect-widget) to register links and handle authentication seamlessly
2. [Belvo JS SDK](https://belvo-finance.github.io/belvo-js/)
3. [Belvo Banking API endpoints](https://developers.belvo.com/reference/banking-and-gig-api) to retrieve data for Accounts, Transactions and Balances for a given Link.


## How to run locally

In order to run locally, you will need to clone this repository and follow the steps below:

1. Change directory to the project folder
2. Make sure you replace the Belvo Secret ID and Password with your own credentials in the .env file
3. Run the follwoing command to install all the required dependencies: `npm i && npm i --prefix client`

4. After this, make sure you are in the project root folder and run `npm run launch`. A new tab in your browser should be opened with the working application.

## Test details

For the bank authorization in the widget, you can use the test details below:

Username: bank100
Password: 123456

If you'd like to test the MFA flow, you can use the sandbox details in [Belvo's documentation](https://developers.belvo.com/docs/test-in-sandbox#advanced-mfa)


