import React, { useEffect } from "react";
import $ from "jquery";

const App = () => {
  function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
      $("footer").css({
        bottom: "0px",
      });
    } else {
      $("footer").css({
        bottom: "-" + heightFooter + "px",
      });
    }
  }

  useEffect(function () {
    var windowHeight = $(window).height(),
      footerHeight = $("footer").height(),
      heightDocument =
        windowHeight + $(".content").height() + $("footer").height() - 20;

    $("#scroll-animate, #scroll-animate-main").css({
      height: heightDocument + "px",
    });

    $("header").css({
      height: windowHeight + "px",
      "line-height": windowHeight + "px",
    });

    $(".wrapper-parallax").css({
      "margin-top": windowHeight + "px",
    });

    scrollFooter(window.scrollY, footerHeight);

    window.onscroll = function () {
      var scroll = window.scrollY;

      $("#scroll-animate-main").css({
        top: "-" + scroll + "px",
      });

      $("header").css({
        "background-position-y": 50 - (scroll * 100) / heightDocument + "%",
      });

      scrollFooter(scroll, footerHeight);
    };
  }, []);

  return (
    <>
      <div id="scroll-animate">
        <div id="scroll-animate-main">
          <div class="wrapper-parallax">
            <header>
              <h3>
                <u> VENMO OR ZELLE WHICH IS BETTER?</u>
              </h3>
            </header>

            <section class="content">
              <div class="aa_htmlTable">
                <h2 class="aa_h2">VENMO vs ZELLE</h2>
                <center>
                  <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">
                      Dropdown
                    </button>
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
                      <th>ZELLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>Email & mobile phone</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Email & mobile phone</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>No Bank institutions</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Uses Bank institution</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        <ul>
                          <li>
                            VENMO charges a service fee/ Requires an account
                          </li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>
                            No service fee/Transfers money directly between bank
                            accounts
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>
            <footer>
              <div class="boxbottom">
                <p>
                  Venmo is a mobile payment (P2P) service owned by paypal. Venmo
                  allows you to pay and request money from your friends. At its core,
                  Venmo provides a social way to pay friends using emojis for when you 
                  owe them money and don't want to deal with cash. Venmo was aimed at friends 
                  and family who wish to  split their lunch, dinner, movie or rent. 
                  
                </p>
                <p>
                Zelle® is mobile payment application that allows (P2P) money transfers,
                simplifying the process of paying for things and making it easier to move money
                without handling cash or visting the bank.
                Zelle was developed by more than 30 major U.S.banks. The service is also integrated
                within the mobile banking apps of major participating banks, including Bank of America,
                Chase, Citi and Wells Fargo. Consumers who already have their bank's mobile app can start 
                using Zelle right away.
                <p>
                  Zelle and Venmo make sending and receiving money easy but in different ways.
                  Zelle works as a service to move money between linked bank accounts free of charge but
                  doesn't hold money in your Zelle account. Venmo holds funds in your account that 
                  you can access. You're not limited to only using your bank account for transactions with
                  Venmo, either you can also use a debit card or, for a fee use a credit card to send money.
                </p>
                
                  
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
