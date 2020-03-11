import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <Header />
      <main>
        <Container fluid>
          <Jumbotron 
            h1="Contact Us"
            lead="Authentic Vietnamese and Chinese cuisine in West Allis"
          />
        </Container>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;