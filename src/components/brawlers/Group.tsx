import React from 'react';
import { Row } from 'react-bootstrap';

interface Props {}

// function isRarity(object: any): object is Rarity {
//   return 'id' in object && 'name' in object && 'color' in object;
// }

const Group: React.FunctionComponent<Props> = (props) => {
  return (
    <Row className='content-container my-sm-4 p-4'>
      {/* {isRarity(props.type) ? (
        <h1 style={{ color: props.type.color }}>{props.type.name}</h1>
      ) : (
        <h1>{props.type.name}</h1>
      )} */}
    </Row>
  );
};

export default Group;
