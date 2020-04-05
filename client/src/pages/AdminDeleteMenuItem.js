import React from 'react';
import Container from '../components/Container';
import DeleteMenuItemForm from '../components/DeleteMenuItemForm';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

function AdminDeleteMenuItem() {
  return(
    <div>
      <Header />
      <Container fluid>
        <Jumbotron
          h1="Delete a menu item"
        />
      </Container>
      <main>
        <DeleteMenuItemForm />
      </main>
    </div>
  )
};

export default AdminDeleteMenuItem;