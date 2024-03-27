import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../context/home';
import BsCards from "./bscards.jsx";
import Filterbuttons from '../cardcomp/filterbuttons';
import Profile from './profile';
import Footer from './footer';
import StatusBar from './networkstatus.jsx';
function NavBar() {
  return (
    <>
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bscardKuch">Bootstrap Cards</Nav.Link>
            <Nav.Link href="/filterBhi">Filter Data</Nav.Link>
           <StatusBar></StatusBar>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/bscardKuch" element={<BsCards></BsCards>}></Route>
        <Route path="/filterBhi" element={<Filterbuttons></Filterbuttons>}></Route>
        <Route path="*" element={<Profile></Profile>}></Route>

    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default NavBar;