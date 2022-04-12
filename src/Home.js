import React,{ Component } from 'react';
import './styles/home.css'
import zelleimg from "./images/BankingApp.jpg"
import screenshotimg from "./images/zelleScreenshot.png";

const Home = () => {
return (

 <div className="home-container">  
    {/* <img src={zelleimg}/> */}
    <div className="container">
    <img src={screenshotimg} alt="Screenshot" className='images'/>
  <div class="overlay">
    <div class="list">Welcome to InfoApp. Meet Zelle. </div>
  </div>
</div>
      
  
  
      <div className='center'>                               
      
      <p>
        The biggest U.S. Banks have backed a new service that lets you pay friends and         family faster.  
      </p>
      <p> 
        Zelle is a U.S. based digital payment that launched in 2017 network owned by           Early Warning Services, a private financial services company owned by the Bank         of America, Capital One, JP Morgan Chase,
      </p>
      <p>
        PNC Bank, US Banks, TD Banks and Wells Fargo.
      </p>
      <p>
        Zelle, a payment network backed by major U.S. Banks, is launching a standalone         app.
      </p>
      <p>
        Since the network works directly with banking partners, money can be                   transferred between accounts  
        regardless of bank affiliation - for free and be withdrawn in minutes.
      </p>
      <p>
        Zelle is an easy way to send money directly between any U.S. bank accounts             typically within minutes.
        You can quickly, safely, and easily send and receive money with more people,           regardless of where they bank.
      </p>
    </div>

    <div className='center'>
      <p> 
        <b>To enroll with the ZELLE APP, enter your basic contact information, an email         address and U.S mobile number and a Visa or Mastercard debit card with a U.S           based account.</b>
      </p>
      <p> 
        Why use ZELLE ? Move your money in the moment with zelle, you can move money           from your account to someone else within minutes.
      </p>
      <p> 
        Send money simple. ZELLE lets you send money with just a few taps on your              mobile phone.
      </p>
      <p> 
        ZELLE doesn't charge a fee to send or receive money. Some banks let you enroll         with the Zelle App using your online banking username and password.
        If your bank supports the feature it's an easy way to link your bank account.        </p>
      <p> 
        Is your information secure? Yes, The ZELLE App user authentication and                 monitoring features to make your payments more secure.
        So whether you're using the Zelle app or using ZELLE through your bank or              credit unions mobile app or online banking, you'll have peace of mind.
      </p>
      <p> 
        How do i cancel ZELLE? If you're enrolled with your debit card through the             Zelle App.
        Please contact our customer support team to cancel your ZELLE service. 
      </p>
      <p>
        You can reach out to Zelle's customer support team toll-free 844-428-8542
      </p>
      <p> 
        If you are using ZELLE through your mobile banking app. Please contact your            bank or credit union to cancel your ZELLE service.
      </p>
    </div>
          
    <iframe width="800" height="400" src="https://www.youtube.com/embed/IDZa1wRsCYM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
  </div>








);}
export default Home;
