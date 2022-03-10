import React, { Component } from "react";

const App = () => {
  return (
    <>
      <div id="formcontainer"></div>

      <form
        id="survey"
        name="survey"
        method="post"
        action="javascript:submitform();"
      >
        <fieldset class="labelfloatleft">
          <legend>Contact Information</legend>

          <label for="firstname">First Name</label>
          <input
            value=""
            type="text"
            name="firstname"
            id="firstname"
            class="text"
          ></input>

          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" class="text"></input>

          <label for="emailaddress">Email Address</label>
          <input
            value=""
            type="email"
            name="emailaddress"
            id="emailaddress"
            size="40"
            class="text"
          ></input>
        </fieldset>

        <fieldset>
          <legend>Personal Information</legend>

          <input type="radio" name="gender" id="male" value="male"></input>
          <label for="male">Male</label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked=""
          ></input>
          <label htmlFor="female">Female</label>
          <h1>Hello</h1>

          <fieldset class="group">
            <label for="yearbirth">Year of Birth</label>
            <input
              value=""
              type="text"
              name="yearbirth"
              id="yearbirth"
              class="text"
              size="4"
              maxlength="4"
            ></input>
          </fieldset>
        </fieldset>

        <fieldset>
          <legend>I would be interested in: (check all that apply)</legend>

          <fieldset class="group">
            <input
              type="checkbox"
              name="interested"
              id="mailinglist"
              value="mailinglist"
              checked=""
            ></input>
            <label for="mailinglist">Please add me to the mailing list</label>
          </fieldset>

          <fieldset class="group">
            <input type="checkbox" name="interested" id="" value=""></input>
            <label for="">I'd like to download Zelle</label>
          </fieldset>

          <fieldset class="group">
            <input
              type="checkbox"
              name="interested"
              id="volunteer"
              value="reunion"
            ></input>
            <label for="reunion">I'd like information on Zelle App</label>
          </fieldset>

          <fieldset class="group">
            <input
              type="checkbox"
              name="interested"
              id="volunteer"
              value="familytree"
            ></input>
            <label for="familytree">Security Questions</label>
          </fieldset>
        </fieldset>

        <fieldset>
          <legend>Send a message</legend>

          <label for="subject">Subject</label>
          <select name="subject" id="subject">
            <option value="info">Providing information Zelle App</option>

            <option value="other">Other</option>
          </select>

          <label for="message">Message</label>
          <textarea name="message" id="message" rows="10" cols="45"></textarea>
        </fieldset>

        <input type="submit" value="Send Information" class="button"></input>
        <input type="reset" value="Cancel" class="button"></input>
      </form>

      <audio controls autoplay>
        <source src="Springtime.mp3" type="audio/mpeg"></source>
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
export default App;
