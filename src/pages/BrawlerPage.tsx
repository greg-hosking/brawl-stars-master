import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';

import Gadget from '../components/brawler/Gadget';
import StarPower from '../components/brawler/StarPower';

import * as Types from '../util/Types';

const BrawlerPage: React.FunctionComponent = () => {
  const { brawlerID } = useParams();
  const [brawler, setBrawler] = useState<Types.Brawler>();
  const shouldFetch = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrawlerData = async () => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        fetch('https://api.brawlapi.com/v1/brawlers/' + brawlerID)
          .then((response) => response.json())
          .then((result) => setBrawler(result))
          .catch(() => navigate('../brawlers', { replace: true }));
      }
    };
    fetchBrawlerData();
  });

  return (
    <Container className='p-sm-5'>
      {brawler ? (
        <>
          <Row className='content-container p-4 align-items-center'>
            <Col md='auto'>
              <Image src={brawler.imageUrl} className='brawler-icon-lg' />
            </Col>
            <Col md>
              <Row>
                <h2>{brawler.name.toUpperCase()}</h2>
              </Row>
              <Row>
                <h5>{brawler.class.name.toUpperCase()}</h5>
              </Row>
              <Row>
                <Col md='auto'>
                  <h5 style={{ color: brawler.rarity.color }}>
                    {brawler.rarity.name.toUpperCase()}
                  </h5>
                </Col>
                {brawler.unlock != null && (
                  <Col md>
                    <Row>
                      <Col xs='auto'>
                        <Image
                          src='https://cdn.brawlify.com/icon/trophy.png'
                          height={25}
                          title={
                            brawler.name +
                            ' is a ' +
                            brawler.rarity.name +
                            ' Brawler unlocked at ' +
                            brawler.unlock +
                            ' trophies.'
                          }
                        ></Image>
                      </Col>
                      <Col xs>
                        <h5>{brawler.unlock}</h5>
                      </Col>
                    </Row>
                  </Col>
                )}
              </Row>
              <Row>
                <h5>{brawler.description}</h5>
              </Row>
            </Col>
          </Row>
          {brawler.starPowers.length > 0 && (
            <Row className='content-container my-sm-4 p-4 align-items-center'>
              {brawler.starPowers.length === 1 ? (
                <Row>
                  <h3>STAR POWER</h3>
                </Row>
              ) : (
                <Row>
                  <h3>STAR POWERS</h3>
                </Row>
              )}
              {brawler.starPowers.map((starPower) => {
                return <StarPower starPower={starPower} />;
              })}
            </Row>
          )}
          {brawler.gadgets.length > 0 && (
            <Row className='content-container my-sm-4 p-4 align-items-center'>
              {brawler.gadgets.length === 1 ? (
                <Row>
                  <h3>GADGET</h3>
                </Row>
              ) : (
                <Row>
                  <h3>GADGETS</h3>
                </Row>
              )}
              {brawler.gadgets.map((gadget) => {
                return <Gadget gadget={gadget} />;
              })}
            </Row>
          )}
        </>
      ) : (
        <>
          <Row className='py-5'>
            <Spinner
              animation='border'
              role='status'
              className='mx-auto'
            ></Spinner>
          </Row>
        </>
      )}
    </Container>
  );
};

export default BrawlerPage;
