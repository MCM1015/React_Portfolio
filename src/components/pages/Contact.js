import React from 'react';

export default function Contact() {
//insert contact form validation here  

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
              <input type="text" className="form-control" placeholder="Enter Name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="Enter Email" aria-describedby="emailHelp" required/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" placeholder="Enter Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
