import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Brawler } from '../../interfaces/Brawler';
import Gadgets from './Gadgets';
import StarPowers from './StarPowers';

interface Props {
  brawler: Brawler;
}

const BrawlerOverview: React.FunctionComponent<Props> = (props) => {
  return (
    <Container className='p-sm-5'>
      <Row className='content-container p-4 align-items-center'>
        <Col md='auto'>
          <Image src={props.brawler.imageUrl} className='brawler-icon-lg' />
        </Col>
        <Col md>
          <Row>
            <h2>{props.brawler.name.toUpperCase()}</h2>
          </Row>
          <Row>
            <h5>{props.brawler.class.name.toUpperCase()}</h5>
          </Row>
          <Row>
            <Col md='auto'>
              <h5 style={{ color: props.brawler.rarity.color }}>
                {props.brawler.rarity.name.toUpperCase()}
              </h5>
            </Col>
            {props.brawler.unlock != null && (
              <Col md>
                <Row>
                  <Col xs='auto'>
                    <Image
                      src='https://cdn.brawlify.com/icon/trophy.png'
                      height={25}
                      title={
                        props.brawler.name +
                        ' is a ' +
                        props.brawler.rarity.name +
                        ' Brawler unlocked at ' +
                        props.brawler.unlock +
                        ' trophies.'
                      }
                    ></Image>
                  </Col>
                  <Col xs>
                    <h5>{props.brawler.unlock}</h5>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
          <Row>
            <h5>{props.brawler.description}</h5>
          </Row>
        </Col>
      </Row>
      {props.brawler.starPowers.length > 0 && (
        <StarPowers starPowers={props.brawler.starPowers}></StarPowers>
      )}
      {props.brawler.gadgets.length > 0 && (
        <Gadgets gadgets={props.brawler.gadgets}></Gadgets>
      )}
    </Container>
  );
};

export default BrawlerOverview;
