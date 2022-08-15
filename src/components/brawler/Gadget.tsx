import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import * as Types from '../../util/Types';

interface Props {
  gadget: Types.Gadget;
}

const Gadget: React.FunctionComponent<Props> = (props) => {
  // Some gadget descriptions returned by the API include inline HTML tags.
  // This removes any HTML tags before rendering the string.
  const description = props.gadget.description.replace(/<(.*?)>/g, '');
  return (
    <>
      <Row className='align-items-center mb-2'>
        <Col md='auto'>
          <div style={{ position: 'relative' }}>
            <Image
              src='https://cdn.brawlify.com/gadgets/Background.png'
              height={100}
            ></Image>
            <Image
              src={props.gadget.imageUrl}
              width={40}
              height={40}
              style={{ position: 'absolute', top: 30, left: 27 }}
            ></Image>
          </div>
        </Col>
        <Col md>
          <h4 className='gadget-label'>{props.gadget.name.toUpperCase()}</h4>
        </Col>
      </Row>
      <Row>
        <h5>{description}</h5>
      </Row>
    </>
  );
};

export default Gadget;
