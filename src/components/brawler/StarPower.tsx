import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import * as Types from '../../util/Types';

interface Props {
  starPower: Types.StarPower;
}

const StarPower: React.FunctionComponent<Props> = (props) => {
  // Some gadget descriptions returned by the API include inline HTML tags.
  // This removes any HTML tags before rendering the string.
  const description = props.starPower.description.replace(/<(.*?)>/g, '');
  return (
    <>
      <Row className='align-items-center mb-2'>
        <Col md='auto'>
          <div
            style={{
              background:
                'url(https://cdn.brawlify.com/star-powers/Background.png) center no-repeat',
              backgroundSize: 'contain',
              height: 100,
              lineHeight: 6,
              textAlign: 'center',
              width: 100
            }}
          >
            <Image
              src={props.starPower.imageUrl}
              style={{ height: '40px', verticalAlign: 'middle', width: '40px' }}
            />
          </div>
        </Col>
        <Col md>
          <h4 className='star-power-label'>
            {props.starPower.name.toUpperCase()}
          </h4>
        </Col>
      </Row>
      <Row>
        <h5>{description}</h5>
      </Row>
    </>
  );
};

export default StarPower;
