import React from "react";
import Container from '../components/Container';
import AddCategoryForm from '../components/AddCategoryForm';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

function AdminAddCategory() {
  return(
    <div>
      <Header />
      <Container fluid>
        <Jumbotron
          h1="Add a menu category"
        />
      </Container>
      <main>
        <AddCategoryForm />
      </main>
    </div>
  )
};

export default AdminAddCategory;