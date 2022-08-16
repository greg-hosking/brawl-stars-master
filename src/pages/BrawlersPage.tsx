import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';

import * as Types from '../util/Types';
import Group from '../components/brawlers/Group';

enum Type {
  CLASS,
  RARITY
}

const getGroups = (type: Type, brawlers: Types.Brawler[]): Types.Group[] => {
  const groups: Types.Group[] = [];

  brawlers.forEach((brawler) => {
    const foundIndex = groups.findIndex((group) => {
      if (type === Type.CLASS) {
        return group.type.id === brawler.class.id;
      }
      return group.type.id === brawler.rarity.id;
    });
    if (foundIndex === -1) {
      const newGroup: Types.Group = {
        type: type === Type.CLASS ? brawler.class : brawler.rarity,
        brawlers: [brawler]
      };
      groups.push(newGroup);
    } else {
      groups[foundIndex].brawlers.push(brawler);
    }
  });

  groups.sort((group1, group2) => {
    return group1.type.id - group2.type.id;
  });
  groups.forEach((group) => {
    group.brawlers.sort((brawler1, brawler2) => {
      return brawler1.id - brawler2.id;
    });
  });

  return groups;
};

const BrawlersPage: React.FunctionComponent = () => {
  const [brawlers, setBrawlers] = useState<Types.Brawler[]>([]);
  const [selectedType, setSelectedType] = useState<Type>(Type.RARITY);

  const shouldFetch = useRef(true);
  useEffect(() => {
    const fetchBrawlersData = async () => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        fetch('https://api.brawlapi.com/v1/brawlers')
          .then((response) => response.json())
          .then((result) => setBrawlers(result.list));
      }
    };

    fetchBrawlersData();
    const storedType = sessionStorage.getItem('selectedType');
    if (storedType === null) {
      sessionStorage.setItem('selectedType', selectedType.toString());
    } else {
      setSelectedType(+storedType);
    }
  });

  return (
    <Container className='p-sm-5'>
      {brawlers.length > 0 ? (
        <>
          <Row className='content-container p-4'>
            <Col md>
              <h2>BRAWLERS</h2>
            </Col>
            <Col md>
              <Row className='justify-content-md-end'>
                <Col xs='auto'>
                  <h2>GROUP BY</h2>
                </Col>
                <Col xs='auto'>
                  <Form.Select
                    defaultValue={selectedType}
                    onChange={(event) => {
                      setSelectedType(+event.target.value);
                      sessionStorage.setItem(
                        'selectedType',
                        event.target.value
                      );
                    }}
                    style={{ WebkitTextStrokeWidth: '0px' }}
                  >
                    <option value={Type.CLASS}>CLASS</option>
                    <option value={Type.RARITY}>RARITY</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='content-container my-sm-4 p-4'>
            {getGroups(selectedType, brawlers).map((group) => {
              return <Group key={group.type.name} group={group} />;
            })}
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

export default BrawlersPage;
