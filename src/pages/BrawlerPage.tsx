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
              <Image
                src={brawler.imageUrl2}
                height={200}
                style={{ border: '2px solid' + brawler.rarity.color }}
              />
            </Col>
            <Col md className='py-3'>
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
            <Row>
              <Col sm>
                {brawler.starPowers.length > 0 && (
                  <Row className='my-4'>
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
                      return (
                        <StarPower key={starPower.id} starPower={starPower} />
                      );
                    })}
                  </Row>
                )}
              </Col>
              <Col sm>
                {brawler.gadgets.length > 0 && (
                  <Row className='my-4'>
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
                      return <Gadget key={gadget.id} gadget={gadget} />;
                    })}
                  </Row>
                )}
              </Col>
            </Row>
          </Row>
        </>
      ) : (
        <Row className='py-5'>
          <Spinner
            animation='border'
            role='status'
            className='mx-auto'
          ></Spinner>
        </Row>
      )}
    </Container>
  );
};

export default BrawlerPage;
