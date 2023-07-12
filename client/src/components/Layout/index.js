import Header from "../Header";
import Jumbotron from "../Jumbotron";
import Container from "../Container";

const Layout = ({ h1, lead, fluid, children }) => {
  return (
    <div>
      <Header />
      <main>
        <Container fluid>
          <Jumbotron h1={h1} lead={lead} />
        </Container>
        <Container fluid={fluid}>
          {children}
        </Container>
      </main>
    </div>
  )
}

export default Layout