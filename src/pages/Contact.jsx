
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
    // Based on the input type, we set the state of either email, username, and message
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setUserName("");
    setMessage("");
    setEmail("");
  };


  return (
    <div className="container p-4">
      <h1 className="text-white-emphasis ">Contact Me</h1>
  <form id="contact-form">

<div className="form-floating mb-3">
  <input name="name" type="name" className="form-control bg-secondary" id="floatingInput" placeholder="Name" defaultValue={userName} onBlur={handleInputChange}></input>
  <label htmlFor="floatingInput">Name</label>
</div>
<div className="form-floating mb-3 ">
  <input name="email" type="email" className="form-control bg-secondary" id="floatingInput" placeholder="name@example.com" defaultValue={email} onBlur={handleInputChange}></input>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3 ">
  <textarea name="message" className="form-control bg-secondary" placeholder="Leave a Message here" id="floatingTextarea2" style={{"height" : "150px"}} defaultValue={message} onBlur={handleInputChange}></textarea>
  <label htmlFor="floatingTextarea2">Message</label>
</div>
{errorMessage && (
  <div>
    <p className="text-danger">{errorMessage}</p>
  </div>
 )}
<button type="submit" onClick={handleInputChange} className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
  export default Contact;
