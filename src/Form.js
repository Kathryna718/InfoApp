import React, { useState } from "react";
import "./App.css";

function Form() {
  const x = 0;
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(true);
  };
  console.log(selected);

  return (
      <div class="form">
      <div class="wrapper">
        <h3>Best BankingApp of 2022</h3>
        <div
          class="poll-area"
          style={
            selected === true
              ? {
                  background:
                    "linear-gradient(to right, yellow 0%, yellow 30%, white 30%, white 100%)"
                }
              : { background: "#fff" }
          }
        >
          <label for="">
            <div class="row">
              <div class="column">
                <span class="circle" onClick={handleClick}></span>
                <span class="text">venmo</span>
              </div>
              <span className="percent"
                style={selected ? { display: "block" } : { display: "none" }}
              >
                30%
              </span>
            </div>
            <div class="progess"></div>
          </label>
        </div>
        <div
          class="poll-area"
          style={
            selected === true
              ? {
                  background:
                    "linear-gradient(to right, yellow 0%, yellow 40%, white 40%, white 100%)"
                }
              : { background: "#fff" }
          }
        >
          <label for="">
            <div class="row">
              <div class="column">
                <span class="circle" onClick={handleClick}></span>
                <span class="text">zelle</span>
              </div>
              <span className="percent"
                style={selected ? { display: "block" } : { display: "none" }}
              >
                40%
              </span>
            </div>
            <div class="progess" style={{ "--w": "40" }}></div>
          </label>
        </div>
        <div
          class="poll-area"
          style={
            selected === true
              ? {
                  background:
                    "linear-gradient(to right, yellow 0%, yellow 20%, white 20%, white 100%)"
                }
              : { background: "#fff" }
          }
        >
          <label for="">
            <div class="row">
              <div class="column">
                <span class="circle" onClick={handleClick}></span>
                <span class="text">chime</span>
              </div>
              <span className="percent"
                style={selected ? { display: "block" } : { display: "none" }}
              >
                20%
              </span>
            </div>
            <div class="progess" style={{ "--w": "20" }}></div>
          </label>
        </div>
        <div
          class="poll-area"
          style={
            selected === true
              ? {
                  background:
                    "linear-gradient(to right, yellow 0%, yellow 10%, white 10%, white 100%)"
                }
              : { background: "#fff" }
          }
        >
          <label for="">
            <div class="row">
              <div class="column">
                <span class="circle" onClick={handleClick}></span>
                <span class="text">varo</span>
              </div>
              <span className="percent"
                style={selected ? { display: "block" } : { display: "none" }}
              >
                10%
              </span>
            </div>
            <div class="progess" style={{ "--w": "10" }}></div>
          </label>
        </div>
      </div>
   </div>
  );
}

export default Form;