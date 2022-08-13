import React from 'react';
import { Row } from 'react-bootstrap';
import { Class } from '../../interfaces/Class';
import { Rarity } from '../../interfaces/Rarity';

interface Props {
  category: Class | Rarity;
}

const BrawlerCategory: React.FunctionComponent<Props> = (props) => {
  return <Row className='content-container my-sm-4 p-4'></Row>;
};

export default BrawlerCategory;
