import React from "react";
import Container from '../components/Container';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import AdminMainScreen from '../components/AdminMainScreen';

function AdminMain() {
  return(
    <div>
      <Header />
      <Container fluid>
        <Jumbotron
          h1="What do you want do?"
        />
      </Container>
      <main>
        <AdminMainScreen />
      </main>
    </div>
  )
};

export default AdminMain;