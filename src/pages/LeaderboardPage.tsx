import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';

const LeaderboardPage: React.FunctionComponent = () => {
  const { leaderboard, brawlerID } = useParams();

  return (
    <Container className='p-sm-5'>
      <Row className='content-container my-sm-4'>
        <h1 className='p-5' style={{ textAlign: 'center' }}>
          {leaderboard === 'players' && <>PLAYERS LEADERBOARD</>}
          {leaderboard === 'clubs' && <>CLUBS LEADERBOARD</>}
          {leaderboard === 'brawlers' && brawlerID === undefined && (
            <>BRAWLER LEADERBOARDS</>
          )}
          {leaderboard === undefined && brawlerID !== undefined && (
            <>BRAWLER LEADERBOARD (ID: {brawlerID})</>
          )}
        </h1>
      </Row>
    </Container>
  );
};

export default LeaderboardPage;
