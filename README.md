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
3. Run the commands below to install all the required dependencies:

```
cd client
npm install
cd ..
npm install
```

4. After this, change directory to the main folder and run `npm run launch`. A new tab in your browser should be opened with the working application.


