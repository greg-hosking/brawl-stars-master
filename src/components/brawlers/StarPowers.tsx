import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { StarPower } from '../../interfaces/StarPower';

interface Props {
  starPowers: StarPower[];
}

const StarPowers: React.FunctionComponent<Props> = (props) => {
  return (
    <Row className='content-container my-sm-4 p-4'>
      {props.starPowers.length === 1 ? (
        <Row>
          <h3>STAR POWER</h3>
        </Row>
      ) : (
        <Row>
          <h3>STAR POWERS</h3>
        </Row>
      )}
      {props.starPowers.map((starPower) => {
        const description = starPower.description.replace(/<(.*?)>/g, '');
        return (
          <Row key={starPower.id} className='mb-2'>
            <Row className='align-items-center mb-2'>
              <Col md='auto'>
                <div style={{ position: 'relative' }}>
                  <Image
                    src='https://cdn.brawlify.com/star-powers/Background.png'
                    height={100}
                  ></Image>
                  <Image
                    src={starPower.imageUrl}
                    width={40}
                    height={40}
                    style={{ position: 'absolute', top: 30, left: 30 }}
                  ></Image>
                </div>
              </Col>
              <Col md>
                <h4 className='star-power-label'>
                  {starPower.name.toUpperCase()}
                </h4>
              </Col>
            </Row>
            <Row>
              <h5>{description}</h5>
            </Row>
          </Row>
        );
      })}
    </Row>
  );
};

export default StarPowers;
