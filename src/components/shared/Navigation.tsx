import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation: React.FunctionComponent = () => {
  return (
    <div className='navigation'>
      <Navbar variant='dark' bg='transparent' expand='md' sticky='top'>
        <Container>
          <Navbar.Brand as={NavLink} to='/brawl-stars-react/'>
            <Image
              src='https://cdn.brawlify.com/gamemode/Hunters.png'
              alt='Brawl Stars Companion logo'
              height={60}
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar'></Navbar.Toggle>
          <Navbar.Collapse id='navbar'>
            <Nav fill className='w-100'>
              <Nav.Link
                as={NavLink}
                to='/brawl-stars-react/'
                className='d-none d-lg-block'
              >
                <h4>HOME</h4>
              </Nav.Link>
              <Nav.Link as={NavLink} to='/brawl-stars-react/events'>
                <h4>EVENTS</h4>
              </Nav.Link>
              <Nav.Link as={NavLink} to='/brawl-stars-react/brawlers'>
                <h4>BRAWLERS</h4>
              </Nav.Link>
              <Nav.Link as={NavLink} to='/brawl-stars-react/gamemodes'>
                <h4>GAME MODES</h4>
              </Nav.Link>
              <NavDropdown title='LEADERBOARDS' className='h4'>
                <NavDropdown.Item
                  as={NavLink}
                  to='/brawl-stars-react/leaderboards/players'
                >
                  PLAYERS
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/brawl-stars-react/leaderboards/clubs'
                >
                  CLUBS
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/brawl-stars-react/leaderboards/brawlers'
                >
                  BRAWLERS
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
