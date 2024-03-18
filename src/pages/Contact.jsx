
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
// import Navigation from './components/Navigation';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "message"){
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!setUserName(userName)) {
      setErrorMessage(`Name is required.`);
      return;
    } else if (!validateEmail(email) || !setUserName(userName)) {
      setErrorMessage("Please input a Name and email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    } else if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setUserName("");
    setMessage("");
    setEmail("");
  };


  return (
    <div>
      <h1 className="text-secondary-emphasis">Contact</h1>
  <form id="contact-form">

<div className="form-floating mb-3">
  <input type="name" className="form-control bg-secondary" id="floatingInput" placeholder="Name" onChange={handleInputChange}></input>
  <label htmlFor="floatingInput">Name</label>
</div>
<div className="form-floating mb-3 ">
  <input type="email" className="form-control bg-secondary" id="floatingInput" placeholder="name@example.com" defaultValue={email} onChange={handleInputChange}></input>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3 ">
  <textarea className="form-control bg-secondary" placeholder="Leave a Message here" id="floatingTextarea2" style={{"height" : "150px"}} defaultValue={message} onChange={handleInputChange}></textarea>
  <label htmlFor="floatingTextarea2">Message</label>
</div>
{errorMessage && (
  <div>
    <p className="is-danger">{errorMessage}</p>
  </div>
 )}
<button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
  export default Contact;
