import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout
      h1="Contact Us"
      lead="Authentic Vietnamese and Chinese cuisine in West Allis"
    >
      <ContactForm />
    </Layout>
  );
};

export default Contact;