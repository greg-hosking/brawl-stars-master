import React from 'react';
import { Container, Row } from 'react-bootstrap';

const HomePage: React.FunctionComponent = () => {
  return (
    <Container className='p-sm-5'>
      <Row className='content-container my-sm-4'>
        <h1 className='p-5' style={{ textAlign: 'center' }}>
          HOME
        </h1>
      </Row>
    </Container>
  );
};

export default HomePage;
