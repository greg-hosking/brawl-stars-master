import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as Types from '../../util/Types';

interface Props {
  group: Types.Group;
}

const Group: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Row>
        {'color' in props.group.type ? (
          <h3 style={{ color: props.group.type.color }}>
            {props.group.type.name.toUpperCase()}
          </h3>
        ) : (
          <h3>{props.group.type.name.toUpperCase()}</h3>
        )}
      </Row>
      <Row className='mb-2'>
        {props.group.brawlers.map((brawler) => {
          return (
            <Col key={brawler.id} xs='auto' className='p-1'>
              <NavLink to={'./' + brawler.id}>
                <Image
                  src={brawler.imageUrl}
                  height={100}
                  title={
                    'Click to view more information about ' + brawler.name + '.'
                  }
                  style={{
                    border: '1px solid' + brawler.rarity.color
                  }}
                ></Image>
              </NavLink>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Group;
