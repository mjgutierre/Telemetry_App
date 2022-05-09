import './App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

export default function App(){
const colors = [

]
}


function App() {
  return (
    <>
      <header>
      <br />
      <Navbar bg="primary" variant="light">
        <Container>
        <Navbar.Brand href="#home"><button type="button" variant="Secondary " class="btn btn-primary">Dashboard</button></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link bgcolor="light" href="#home">Statistics</Nav.Link>
          <Nav.Link bgcolor="light" href="#features">Map</Nav.Link>
          <Nav.Link bgcolor="light" href="#pricing">Reports</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </header>
    </>
  );
}

export default App;
