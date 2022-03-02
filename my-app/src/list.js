import React,{ Component } from 'react';


 
    const App = () => {
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    
      return (
        <><></>
    <div id="scroll-animate">
    <div id="scroll-animate-main">
      <div class="wrapper-parallax">
        <header>
          <h3><u>Competition with PayPal's Venmo service</u></h3>
        </header>

        <section class="content">
<div class="aa_htmlTable">
<h2 class="aa_h2">VENMO vs ZELLE</h2>
<center>
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="Zelle.html">Home</a>
    <a href="list.html">List</a>
    <a href="Table.html">table</a>
    <a href="form.html">Feedback</a>
    <a href="contact.html">Contact</a>
  </div>
</div>
</center>
<table>
  <thead>
    <tr>
      <th>VENMO</th>
      <th>Zelle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><ul>
        <li>Email & mobile phone</li>
      </ul></td>
      <td><ul>
      <li>Email & mobile phone</li>
    </ul></td>
    </tr>
    <tr>
      <td><ul>
        <li>No Bank institutions</li>
      </ul></td>
      <td><ul>
        <li>Uses Bank institution</li>
    </ul></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td><ul>
        <li>VENMO charges a service fee/ Requires an account</li>
    </ul></td>
      <td><ul>
        <li>No service fee/Transfers money directly between bank accounts</li>
    </ul></td>
    </tr>
  </tfoot>
</table>
</div>
        </section>
        <footer>
          <div class="boxbottom">


          <p>Venmo is a mobile payment service owned by paypal.Venmo account holders can transfer funds to others via a mobile app both the sender and receiver have tolive in the U.S Venmo is a type of payment rail.</p>
          <p>The Zelle service's principal competitor is PayPal and its Venmo payment service. Venmo is more popular, based on public awareness, opinion polling, and active engagement with users, but Zelle processes a much larger dollar volume of money transfers.The two services work very similarly from the user's perspective – e.g., both services use email addresses and mobile phone numbers to identify recipients, but Venmo lacks the direct integration with banking institutions that Zelle has, and Zelle money transfers are typically processed more quickly.

Starting in January 2018, Venmo began to also offer a more rapid transfer option than its typical 1–3 day transfer service, but Venmo charges a fee for the service, which Zelle-affiliated banks currently do not. The Zelle network itself does not charge a fee to users for money transfers. Banks are allowed to charge a fee for Zelle transfers involving their accounts, but they have generally not chosen to do so.

Venmo requires its users to set up an account in its system that is separate from an ordinary banking account and is not insured by FDIC or NCUA, which banking accounts are. The Venmo account can be linked to a bank account so that necessary funds will be automatically withdrawn from there. However, funds can only be withdrawn from a Venmo account by first transferring them to a bank account and then withdrawing the money from the bank account (a process that adds an extra step and involves some additional delay and possibly a fee). In contrast, Zelle transfers money directly between bank accounts, so it requires no separate account or extra steps to obtain access to funds. Zelle is also accessible through banking institution websites and apps as well as through the separate Zelle mobile app.

Venmo payments can be canceled before they are finalized. This provides some ability to correct accidental payments and rescind transactions that have not proceeded to the satisfaction of the payer. However, it has also enabled some scammers to exploit the cancellation feature on Craigslist and in other contexts by appearing to transfer money and then canceling the transaction before it is finalized. Zelle payments to a registered user cannot be canceled.</p>
        </div>
        </footer>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="javatext.js"></script>
  <script>
  
  </script>
  <></>
  )
  );{'}'}
export default App;
