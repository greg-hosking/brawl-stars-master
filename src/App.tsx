import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';

import HomePage from './pages/HomePage';
import BrawlersPage from './pages/BrawlersPage';
import BrawlerPage from './pages/BrawlerPage';
import EventsPage from './pages/EventsPage';
import GameModesPage from './pages/GameModesPage';
import LeaderboardPage from './pages/LeaderboardPage';

const App: React.FunctionComponent = () => {
  return (
    <Container fluid className='app-container p-0'>
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/brawlers' element={<BrawlersPage />} />
            <Route path='/brawlers/:brawlerID' element={<BrawlerPage />} />
            <Route path='/gamemodes' element={<GameModesPage />} />
            <Route
              path='leaderboards/:leaderboard'
              element={<LeaderboardPage />}
            />
            <Route
              path='/leaderboards/brawlers/:brawlerID'
              element={<LeaderboardPage />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
