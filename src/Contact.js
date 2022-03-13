import React, { Component } from "react";
import contactimg from "./images/xxx-28.jpg";
import emailjs from "emailjs-com"

const App = () => {
function sendEmail(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_sryc7va",
  "template_8pm6akk",
  e.target,
  "d7Wm4kfaIRKYDfMGS"
  ).then(res=>{
      console.log(res);
  }).catch(err=> console.log(err));

}
  return (
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
      <h5 style={{ marginTop: "25px" }}>Contact Form </h5>

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

      <center>
        <img src={contactimg} usemap="#zelle" />
        <map name="zelle">
          <area
            shape="rect"
            href="https://www.zellepay.com/"
            coords="352,1,598,329"
          />
          <area shape="rect" href="https://venmo.com/" coords="0,1,251,329" />
        </map>
      </center>
    </div>
  );
    }
export default App;
