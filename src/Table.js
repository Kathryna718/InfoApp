import React, { Component } from "react";

const Table = () => {
  return (
    
      <div className="table-container">
        <div id="pricing-table" class="clear">
          
          <div class="plan" id="most-popular">
            <h3>
              Step 1<span>1</span>
            </h3>
            <ul>
              <li>
                <b>Access ZELLE on Google Store or Apple store</b>
              </li>
            </ul>
          </div>
          <div class="plan">
            <h3>
              Step 2<span>2</span>
            </h3>
            <ul>
              <li>
                <b>
                  Pick a person to pay. Once you enroll,all you need to send
                  money with ZELLE is the preferred email address or mobile
                  number of the trusted recipient.
                </b>
              </li>
            </ul>
          </div>
          <div class="plan">
            <h3>
              Step 3<span>3</span>
            </h3>
            <ul>
              <li>
                <b>
                  Choose the amount you want to send.If your recipient is
                  already enrolled with ZELLE, the money will go directly into
                  their bank account, typically in minute.If they aren't
                  enrolled yet, they will get a notification explaining how to
                  recieve the money simple and quickly.
                </b>
              </li>
            </ul>
          </div>
        </div>
        <div id="wrapper">
          <div id="perp" />
          <table>
            <tr>
              <th>
                <h2 align="center">EASY.FAST.SAFE.DONE</h2>Forget running to the
                ATM or mailing a check with ZELLE you can send and recieve money
                with peace of mind. Safely and easily send money to people.You
                know through your trusted banking app-or the ZELLE app if your
                bank doesn't currently offer ZELLE.
              </th>
            </tr>
          </table>
          <p>
            The ZELLE service's principal competitor is PAYPAL and its VENMO
            payment service. VENMOis more popular, based on public awareness,
            opinions, polling, and active engagement with users, but ZELLE
            processes a much larger dollar volume of money transfers. The two
            services work very similarly from the user's perspective both
            services use email addresses and mobile phone numbers to identify
            recipients but VENMO lacks the direct integration with bank
            institutions that ZELLE has.
          </p>
          <p>
            {" "}
            ZELLE money transfers are typically processed more quickly. Starting
            in January 2018, VENMO began to also offer a more rapid transfer
            option than its typical 1-3 days transfer service but VENMO charges
            a fee for service, which ZELLE-affiliated banks currently do not.
            The ZELLE network itself does not charge a fee to users for money
            transfers. Banks are allowed to charge a fee for Zelle transfers
            involving their accounts but they have generally not chosen to do
            so.
          </p>

          <p>
            VENMO requires its users to set up an account in its system that is
            separate from an ordinary banking account and is not insured by FDIC
            or NCUA,which banking accounts are. The VENMO account can be linked
            to a bank account so that necessary funds will be automatically
            withdrawn from there.However, funds can only be withdrawn from a
            VENMO account by first transferring them to a bank account and then
            withdrawing the money from the bank account,a process that adds an
            extra step and involves some additional delay and possibly a fee).In
            contrast,ZELLE transfers money directly between banks accounts, so
            it requires no separate account or extra steps to obtain access to
            funds.
          </p>
          <p>
            ZELLE is also accessible through banking institutions websites and
            apps as well as through the separate ZELLE mobile app. VENMO
            payments can be canceled before they are finalized. This provides
            some ability to correct accidental payments and rescind transactions
            that have not proceeded to the satisfaction of the payer.However, it
            has also enabled some scammers to exploit the cancellation feature
            on Craigslist and in other contexts by appearing to transfer money
            and then canceling the transaction before it is finalized. ZELLE
            payments to a register user cannot be canceled.
          </p>
        </div>
      </div>
    
  );
};

export default Table;
