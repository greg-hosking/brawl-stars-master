import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Gadget } from '../../interfaces/Gadget';

interface Props {
  gadgets: Gadget[];
}

const Gadgets: React.FunctionComponent<Props> = (props) => {
  return (
    <Row className='content-container my-sm-4 p-4'>
      {props.gadgets.length === 1 ? (
        <Row>
          <h3>GADGET</h3>
        </Row>
      ) : (
        <Row>
          <h3>GADGETS</h3>
        </Row>
      )}
      {props.gadgets.map((gadget) => {
        const description = gadget.description.replace(/<(.*?)>/g, '');
        return (
          <Row key={gadget.id} className='mb-2'>
            <Row className='align-items-center mb-2'>
              <Col md='auto'>
                <div style={{ position: 'relative' }}>
                  <Image
                    src='https://cdn.brawlify.com/gadgets/Background.png'
                    height={100}
                  ></Image>
                  <Image
                    src={gadget.imageUrl}
                    width={40}
                    height={40}
                    style={{ position: 'absolute', top: 30, left: 27 }}
                  ></Image>
                </div>
              </Col>
              <Col md>
                <h4 className='gadget-label'>{gadget.name.toUpperCase()}</h4>
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

export default Gadgets;
