import React from 'react';
import Container from '../components/Container';
import EditMenuItemForm from '../components/EditMenuItemForm';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';

class AdminEditMenuItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <Header />
        <Container fluid>
          <Jumbotron
            h1="Edit a menu item"
          />
        </Container>
        <main>
          <EditMenuItemForm />
        </main>
      </div>
    )
  }

}
export default AdminEditMenuItem;