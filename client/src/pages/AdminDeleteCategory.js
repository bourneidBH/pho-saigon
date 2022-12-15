import React from 'react';
import Container from '../components/Container';
import DeleteCategoryForm from '../components/DeleteCategoryForm';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

function AdminDeleteCategory() {
  return(
    <div>
      <Header />
      <Container fluid>
        <Jumbotron
          h1="Delete a menu category"
        />
      </Container>
      <main>
        <DeleteCategoryForm />
      </main>
    </div>
  )
};

export default AdminDeleteCategory;