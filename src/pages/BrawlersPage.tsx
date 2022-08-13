import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BrawlerCategory from '../components/brawlers/BrawlerCategory';
import { Brawler } from '../interfaces/Brawler';

const BrawlersPage: React.FunctionComponent = () => {
  const [brawlers, setBrawlers] = useState<Brawler[]>([]);

  const shouldFetch = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        const data = await fetch('https://api.brawlapi.com/v1/brawlers', {
          method: 'GET'
        });
        const jsonData = await data.json();

        setBrawlers(jsonData.list);
      }
    };

    fetchData();
  });

  return (
    <>
      <Container className='p-sm-5'>
        <Row className='content-container my-sm-4 p-4'>
          <h1>BRAWLERS</h1>
          {brawlers.map((brawler) => {
            return (
              <Col xs='auto' className='m-2'>
                <NavLink to={'./' + brawler.id}>
                  <Image src={brawler.imageUrl} height={100}></Image>
                </NavLink>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BrawlersPage;
