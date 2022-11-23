import React from 'react';

const Interface = () => {
  return (
    <div>
      <div class='row pb-xl'>
        <div class='col'>
          <div class='text-regular-20 pb-m'>
            Success! You just created a link in Belvo.
          </div>
          <div class='divider' />
        </div>
      </div>
      <div class='row mb-xl'>
        <div class='col-6'>
          <p class='title'>LINK ID</p>
          <p class='data'>1234-5678-9012</p>
        </div>
      </div>
      <card class='widget-list'>
        <div slot='content'>
          <div class='widget-list__header px-l py-l'>
            <div class='row flex-middle'>
              <div class='col'>
                <div class='text-medium-16'>ENDPOINTS</div>
              </div>
            </div>
          </div>
          <div class='widget-list__content px-l'>
            <div class='list-item'>
              <div class='row py-m flex-between'>
                <div class='two-list-item-action__left-item col request-title'>
                  <div class='text-regular-14 request-type post mr-l'>POST</div>
                  <div class='request-content'>
                    <div class='row'>
                      <div class='text-medium-16 mr-m'>Accounts</div>
                      <div class='text-regular-14'>/api/accounts/</div>
                    </div>
                    <div class='row'>
                      <div class='text-regular-14'>
                        Retrieve the information from all the Accounts inside
                        the Link.
                      </div>
                    </div>
                  </div>
                </div>
                <div class='list-item-action col'>
                  <b-button type='primary' text='Send request' />
                </div>
              </div>
              <div class='request-response' v-if='this.accounts'>
                <div class='row response-header pb-s'>
                  <div class='text-medium-14 col'>Name</div>
                  <div class='text-medium-14 col'>Account Number</div>
                  <div class='text-medium-14 col'>Balance</div>
                </div>
                <div v-for='item in this.accounts' class='row mb-xl pt-m pb-m'>
                  <div class='text-regular-16 col'>Item</div>
                  <div class='text-regular-16 col'>Number</div>
                  <div class='text-regular-16 col'>Current Balance</div>
                </div>
              </div>
            </div>
            <div class='list-item'>
              <div class='row py-m flex-between'>
                <div class='two-list-item-action__left-item col request-title'>
                  <div class='text-regular-14 request-type post mr-l'>POST</div>
                  <div class='request-content'>
                    <div class='row'>
                      <div class='text-medium-16 mr-m'>Transactions</div>
                      <div class='text-regular-14'>/api/transactions/</div>
                    </div>
                    <div class='row'>
                      <div class='text-regular-14'>
                        Retrieve the transactions from the last 30 days from
                        each one of the Accounts inside the Link already
                        created.
                      </div>
                    </div>
                  </div>
                </div>
                <div class='list-item-action col'>
                  <b-button type='primary' text='Send request' />
                </div>
              </div>
              <div class='request-response' v-if='this.transactions'>
                <div class='row response-header pb-s'>
                  <div class='text-medium-14 col'>Name</div>
                  <div class='text-medium-14 col'>Amount</div>
                  <div class='text-medium-14 col'>Date</div>
                </div>
                <div
                  v-for='item in this.transactions'
                  class='row mb-xl pt-m pb-m'
                >
                  <div class='text-regular-16 col'>Description</div>
                  <div class='text-regular-16 col'>Amount</div>
                  <div class='text-regular-16 col'>2022-11-11</div>
                </div>
              </div>
            </div>
            <div class='list-item'>
              <div class='row py-m flex-between'>
                <div class='two-list-item-action__left-item col request-title'>
                  <div class='text-regular-14 request-type post mr-l'>POST</div>
                  <div class='request-content'>
                    <div class='row'>
                      <div class='text-medium-16 mr-m'>Balance</div>
                      <div class='text-regular-14'>/api/balances/</div>
                    </div>
                    <div class='row'>
                      <div class='text-regular-14'>
                        Retrieve the daily balance of all the Accounts for the
                        last 30 days.
                      </div>
                    </div>
                  </div>
                </div>
                <div class='list-item-action col'>
                  <b-button type='primary' text='Send request' />
                </div>
              </div>
              <div class='request-response' v-if='this.balances'>
                <div class='row response-header pb-s'>
                  <div class='text-medium-14 col'>Name</div>
                  <div class='text-medium-14 col'>Balance</div>
                  <div class='text-medium-14 col'>Date</div>
                </div>
                <div v-for='item in this.balances' class='row mb-xl pt-m pb-m'>
                  <div class='text-regular-16 col'>Account Name</div>
                  <div class='text-regular-16 col'>Current Balance</div>
                  <div class='text-regular-16 col'>2022-11-11</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
    </div>
  );
};

export default Interface;
