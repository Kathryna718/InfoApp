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
        <><><img src="unnamed.png" width="500"></img><><div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
            <a href="Zelle.html">Home</a>
            <a href="list.html">List</a>
            <a href="Table.html">table</a>
            <a href="form.html">Feedback</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>

          <div>
            <p> The biggest US Banks have backed a new service that lets you pay friends and family faster.</p>
            <p> <b>Zelle</b> (payment service) Zelle is a U.S based digital payment that launched in 2017 network owned by Early Warning services, a private financial services company owned by the banks
              <b>Bank of America, BB&T, Capital One, JP Morgan Chase, PNC Bank, US Bank and Wells Frago, TD Bank</b>.</p>
            <p> <b>Zelle</b>, a payment network backed by major US Banks, is launching a standalone app. Since the network works directly with banking partners, money can be transferred between accounts</p>
            regardless of bank affiliation- for free, and can be withdrawn in minutes.<b>Zelle</b> is an easy way to send money directly between any U.S. bank accounts typically within minutes. With just an email address or mobile phone number,


            <p>you can quickly, safely and easily send and receive money with more people, regardless of where they bank.</p><p> <b>To enroll with the ZELLE APP, enter your basic contact information, an email address and U.S mobile number and a Visa or Mastercard debit card with a U.S based account.</b>
              We do not accept debit cards associated with internationally deposits accounts or any credit card.</p><p> Why use ZELLE ? Move your money in the moment with zelle, you can move money from your account to someone else within minutes.</p>
            <p> Send money simple. ZELLE lets you send money with just a few taps on your mobile phone.</p>
            <p> ZELLE doesn't charge a fee to send or receive money. Some banks let you enroll with the Zelle App using your online banking username and password. If your bank supports the feature it's an easy way to link your bank account.</p>
            <p> Is my information secure? The ZELLE App user authentication and monitoring features to make your payments more secure.So whether you're using the Zelle app or using ZELLE through your bank or credit unions mobile app or online banking, you'll have peace of mind.</p>
            <p> How do i cancel ZELLE? If you're enrolled with your debit card through the Zelle App, Please contact our customer support team to cancel your ZELLE service. You can reach our customer support team toll-free 844-428-8542</p>
            <p> If you are using ZELLE through your mobile banking app. Please contact your bank or credit union to cancel your ZELLE service.</p>
          </div></></><iframe width="800" height="400" src="https://www.youtube.com/embed/IDZa1wRsCYM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></>

         
      
      );}
export default App;
