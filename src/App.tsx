import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Image, Nav } from 'react-bootstrap';


function NavigationBar() {
  return (
    <div className='navigation-bar'>
      <Navbar variant='dark' bg='transparent' expand='sm' sticky='top'>
        <Container>
          <Navbar.Brand href="#">
            <Image src='https://cdn.brawlify.com/gamemode/Hunters.png' alt="Brawl Stars Companion logo" height={60}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar'></Navbar.Toggle>
          <Navbar.Collapse id='navbar'>
            <Nav fill style={{ width: '100%' }}>
              <Nav.Link href="#" className='d-sm-none d-md-block'><h3>HOME</h3></Nav.Link>
              <Nav.Link href="#"><h3>BRAWLERS</h3></Nav.Link>
              <Nav.Link href="#"><h3>EVENTS</h3></Nav.Link>
              <Nav.Link href="#"><h3>GAME MODES</h3></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer px-5 py-3'>
      <h5>
        Powered by <a href='https://brawlify.com/' target='blank'>Brawlify</a>.
      </h5>
      <h5>
        This material is unofficial and is not endorsed by Supercell.
        For more information see <a href='https://supercell.com/en/fan-content-policy/'>Supercell's Fan Content Policy.</a>
      </h5>
    </div>
  )
}

function App() {
  return (
    <>
      <body>

        <NavigationBar></NavigationBar>


        <Footer></Footer>

      </body>
    </>
  );
}

export default App;
