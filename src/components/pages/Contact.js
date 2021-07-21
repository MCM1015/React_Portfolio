import React, {useState} from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessageName, setErrorMessageName] = useState(''); 
  const [errorMessageMessage, setErrorMessageMessage] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState(''); 
  const [errorMessageEmail2, setErrorMessageEmail2] = useState(''); 

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      if (!validateEmail(email)) {
        setErrorMessageEmail('Email is invalid');
      }
        else {
      setErrorMessageEmail('');
        }
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputName = (e) => {
    if (userName==='') {
      setErrorMessageName('Field is required');
    }
      else {
    setErrorMessageName('');
      }
  }

  const handleInputEmail = (e) => {
    if (email==='') {
      setErrorMessageEmail2('Field is required');
    }
      else {
    setErrorMessageEmail2('');
      }
  }

  const handleInputMessage = (e) => {
    if (message==='') {
      setErrorMessageMessage('Field is required');
    }
      else {
    setErrorMessageMessage('');
      }
  }
  
  return (
    <div>
      <div className="row">
        <div className="card col-lg">
          <h1>Contact Me:</h1>
          <div>
            <ul className="contact-list">
              <li>
                <a className="nav-link" href="tel:443-765-2885">Phone: 443-765-2885</a>
              </li>
              <li>
                <a className="nav-link" href="mailto:Mary.C.McClernan@gmail.com"
                  target="_blank" rel="noreferrer">Email: Mary.C.McClernan@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card col-lg">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input value={userName} name="userName" onChange={handleInputChange} onMouseOut={handleInputName} type="text" className="form-control" placeholder="Enter Name" required/>
              <span className="text-danger">{errorMessageName}</span>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input value={email} name="email" onChange={handleInputChange}  onMouseOut={handleInputEmail} type="email" className="form-control" placeholder="Enter Email" aria-describedby="emailHelp" required/>
              <span className="text-danger">{errorMessageEmail}</span>
              <br></br>
              <span className="text-danger">{errorMessageEmail2}</span>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea value={message} name="message" onChange={handleInputChange} onMouseOut={handleInputMessage} className="form-control" rows="5" placeholder="Enter Message" required></textarea>
              <span className="text-danger">{errorMessageMessage}</span>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
