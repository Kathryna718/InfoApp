import React, { Component, useState } from "react";
import contactimg from "./images/xxx-28.jpg";
import emailjs from "emailjs-com"

import './styles/contact.css'

const App = () => {
const count = 0
  const [response, setResponse] = useState(null);
  
function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm(
    "service_ycnqeoe",
  "template_8pm6akk",
  e.target,
  "d7Wm4kfaIRKYDfMGS"
  ).then(res=>{
      setResponse("Success!")
  }).catch(err=> setResponse("Failed. Try again later!"));
  e.target.reset();
}
  return (
    <div className='contact-container'>
    <div
      className="Container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUJD0DgCxdTDAbvk6u3gVm25AqOS6Ksnt9Q&usqp=CAU')`,
      }}
    >
      <h5 style={{ marginTop: "25px", textAlign:"center" }}>Contact Form </h5>

      <form className="row" style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="Name"  className="form-control"/>

        <label>Email</label>
        <input type="email" name="user_email" className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send" 
          className="form-control btn btn-primary"
          style={{ marginTop: "1px" }}
        />
      </form>
      <h3>{response}</h3>

   
    </div>
    <div className='visit'>
          <h2> visit site at :</h2>
        <img src={contactimg} usemap="#zelle" />
        <map name="zelle">
          <area
            shape="rect"
            href="https://www.zellepay.com/"
            coords="352,1,598,329"
          />
          <area shape="rect" href="https://venmo.com/" coords="0,1,251,329" />
        </map>
    </div>
</div>
  );
    }
export default App;
