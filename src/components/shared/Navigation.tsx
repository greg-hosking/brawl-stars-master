import React from 'react';

import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation: React.FunctionComponent = () => {
  return (
    <div className='navigation'>
      <Navbar variant='dark' bg='transparent' expand='sm' sticky='top'>
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
            <Image
              src='https://cdn.brawlify.com/gamemode/Hunters.png'
              alt='Brawl Stars Companion logo'
              height={60}
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar'></Navbar.Toggle>
          <Navbar.Collapse id='navbar'>
            <Nav fill style={{ width: '100%' }}>
              <Nav.Link as={NavLink} to='/' className='d-sm-none d-md-block'>
                <h3>HOME</h3>
              </Nav.Link>
              <Nav.Link as={NavLink} to='/brawlers'>
                <h3>BRAWLERS</h3>
              </Nav.Link>
              <Nav.Link as={NavLink} to='/events'>
                <h3>EVENTS</h3>
              </Nav.Link>
              <Nav.Link as={NavLink} to='/gamemodes'>
                <h3>GAME MODES</h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
