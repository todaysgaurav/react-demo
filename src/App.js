import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default function App() {
  var submitForm = Array();
  function handleChange(e) {
    e.preventDefault();

    submitForm[0] = e.target[0].value;
    submitForm[1] = e.target[1].value;
    submitForm[2] = e.target[2].value;
    submitForm[3] = e.target[3].value;
    submitForm[4] = e.target[4].value;
    submitForm[5] = e.target[5].value;

    $.ajax({
      url: 'demo_test.txt',
      success: function(result) {
        alert(result);
      }
    });
  }
  return (
    <div>
      <h1>Hello User!</h1>
      <p>Please fill the form, i will give all update on your email :)</p>
      <form onSubmit={handleChange}>
        <span>
          First Name: <input type="text" id="fname" />
        </span>
        <br />
        <br />
        <span>
          Last Name: <input type="text" id="lname" />
        </span>
        <br /> <br />
        <span>
          Email: <input type="text" id="email" />
        </span>
        <br /> <br /> <br />
        <span>
          Phone No: <input type="text" id="phone" />
        </span>
        <br /> <br />
        <span>
          Password: <input type="Password" id="pass" />
        </span>
        <br /> <br />
        <span>
          Confirm Password: <input type="Password" id="confpass" />
        </span>
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
