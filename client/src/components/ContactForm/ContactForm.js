import React from 'react';
import './ContactForm.css';
import Container from "../Container";
import axios from 'axios';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: '/api/sendmessage',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
    .then(response => {
      if (response.data.msg === 'success') {
        alert('Thank you for contacting us.');
        this.setState({
          mailSent: response.data.sent
        });  
    } else if (response.data.msg === 'fail') {
        alert("We're sorry! Your message failed to send. Please try again or call 414-828-9698.");
    }
    })
    .catch(err => {
      this.setState({ err: err.message});
      console.log(err);
    });

    // clear form
    if (this.state.mailSent) {
      this.setState({
        name: '',
        email: '',
        message: '',
        mailSent: false
      })
    };
  };

  render() {
    return (
      <Container>
        <p className="centered">Call <a href="tel:4148289698" className="phone">414-828-9698</a> or fill out the form below.</p>
        <p>&nbsp;</p>
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" onChange={this.handleInputChange} required />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message:</label>
            <textarea className="form-control" id="message" name="message" rows="3" onChange={this.handleInputChange} required></textarea>
          </div>
          <div className="centered">
            <button className="btn btn-secondary" type="submit" id="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
          <div>
            {this.state.mailSent &&
              <div>Thank you for contacting us.</div>
            }
          </div>
        </form>
      </Container>
    )
  };
};

export default ContactForm;