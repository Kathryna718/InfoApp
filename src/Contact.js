import React, { Component } from "react";
import contactimg from "./images/xxx-28.jpg"
const App = () => {
 
  return (
    <div className="Contact">
      

        <h1>Contact us </h1>

        <form action="/" method="post">
          <div class="flex flex-col mb-4 md:w-1/2">
            <label
              class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
              for="first_name"
            >
              First Name
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="first_name"
              id="first_name"
            />
          </div>

          <div class="flex flex-col mb-4 md:w-1/2">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2"
              for="last_name"
            >
              Last Name
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest md:ml-2"
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>

          <div class="flex flex-col mb-4 md:w-1/2">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2"
              for="last_name"
            >
              Subject
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest md:ml-2"
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>

          <label for="email">Email</label>
          <input type="email" name="email" id="email"></input>
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="10" cols="45"></textarea>
          <button type="submit">Submit</button>
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
};
export default App;