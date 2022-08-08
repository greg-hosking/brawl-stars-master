import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Image, Nav } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import BrawlersPage from './pages/BrawlersPage';
import EventsPage from './pages/EventsPage';
import GameModesPage from './pages/GameModesPage';

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';


function NavigationBar() {
  return (
    <div className='navigation-bar'>
      <Navbar variant='dark' bg='transparent' expand='sm' sticky='top'>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <Image src='https://cdn.brawlify.com/gamemode/Hunters.png' alt="Brawl Stars Companion logo" height={60}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar'></Navbar.Toggle>
          <Navbar.Collapse id='navbar'>
            <Nav fill style={{ width: '100%' }}>
              <Nav.Link as={NavLink} to="/" className='d-sm-none d-md-block'><h3>HOME</h3></Nav.Link>
              <Nav.Link as={NavLink} to="/brawlers"><h3>BRAWLERS</h3></Nav.Link>
              <Nav.Link as={NavLink} to="/events"><h3>EVENTS</h3></Nav.Link>
              <Nav.Link as={NavLink} to="/gamemodes"><h3>GAME MODES</h3></Nav.Link>
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
        Powered by <a href='https://brawlify.com/' target='_blank' rel='noopener noreferrer'>Brawlify</a>.
      </h5>
      <h5>
        This material is unofficial and is not endorsed by Supercell.
        For more information see <a href='https://supercell.com/en/fan-content-policy/' target='_blank' rel='noopener noreferrer'>
          Supercell's Fan Content Policy.</a>
      </h5>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavigationBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/brawlers' element={<BrawlersPage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/gamemodes' element={<GameModesPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
