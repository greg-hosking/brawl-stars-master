import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Image, Row, Spinner } from 'react-bootstrap';

import * as Types from '../util/Types';
import { NavLink } from 'react-router-dom';

enum GroupBy {
  CLASS,
  RARITY
}

interface Group {
  category: Types.Class | Types.Rarity;
  brawlers: Types.Brawler[];
}

const getBrawlerGroups = (
  groupBy: GroupBy,
  brawlers: Types.Brawler[]
): Group[] => {
  const groups: Group[] = [];

  // Add each brawler to the group they belong to if it exists,
  // otherwise create a new group and add them to it.
  brawlers.forEach((brawler) => {
    const foundIndex = groups.findIndex((group) => {
      return (
        (groupBy === GroupBy.CLASS && brawler.class.id === group.category.id) ||
        (groupBy === GroupBy.RARITY && brawler.rarity.id === group.category.id)
      );
    });
    if (foundIndex === -1) {
      const newGroup: Group = {
        category: groupBy === GroupBy.CLASS ? brawler.class : brawler.rarity,
        brawlers: [brawler]
      };
      groups.push(newGroup);
    } else {
      groups[foundIndex].brawlers.push(brawler);
    }
  });

  // Sort the groups in ascending order by category ID,
  // then sort the brawlers within each group in ascending order by ID.
  groups.sort((a, b) => {
    return a.category.id - b.category.id;
  });
  groups.forEach((group) => {
    group.brawlers.sort((a, b) => {
      return a.id - b.id;
    });
  });

  return groups;
};

const BrawlersPage: React.FunctionComponent = () => {
  const [brawlers, setBrawlers] = useState<Types.Brawler[]>([]);
  const [groupBy, setGroupBy] = useState<GroupBy>(GroupBy.RARITY);

  const shouldFetch = useRef(true);
  useEffect(() => {
    const fetchBrawlers = async () => {
      fetch('https://api.brawlapi.com/v1/brawlers')
        .then((response) => response.json())
        .then((json) => setBrawlers(json.list));
    };
    // For a better user experience, store the last selected value from the
    // 'Group By' dropdown menu, with a default value of GroupBy.RARITY if
    // this is the first time using this page.
    const fetchGroupBy = () => {
      const storedGroupBy = sessionStorage.getItem('/brawlers?groupBy=');
      if (storedGroupBy === null) {
        sessionStorage.setItem('/brawlers?groupBy=', groupBy.toString());
      } else {
        setGroupBy(+storedGroupBy);
      }
    };

    if (shouldFetch.current) {
      shouldFetch.current = false;
      fetchBrawlers();
      fetchGroupBy();
    }
  });

  // Split the brawler groups into rows of two groups each for later rendering.
  const brawlerGroups2D: Group[][] = [];
  getBrawlerGroups(groupBy, brawlers).forEach((group, index) => {
    if (index % 2 === 0) {
      brawlerGroups2D.push([group]);
    } else {
      brawlerGroups2D[brawlerGroups2D.length - 1].push(group);
    }
  });

  return (
    <Container className='p-sm-5'>
      {brawlers.length > 0 ? (
        <>
          <Row className='content-container p-4'>
            <Col md>
              <h3 className='mt-1'>BRAWLERS</h3>
            </Col>
            <Col md>
              <Row>
                <Col md={2} lg={4} xl={6}></Col>
                <Col xs md='auto'>
                  <h5 className='mt-2'>GROUP BY</h5>
                </Col>
                <Col xs>
                  <Form.Select
                    defaultValue={groupBy}
                    onChange={(event) => {
                      sessionStorage.setItem(
                        '/brawlers?groupBy=',
                        event.target.value
                      );
                      setGroupBy(+event.target.value);
                    }}
                  >
                    <option value={GroupBy.CLASS}>CLASS</option>
                    <option value={GroupBy.RARITY}>RARITY</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='content-container my-sm-4 p-4'>
            {brawlerGroups2D.map((row) => {
              return (
                <Row>
                  {row.map((group) => {
                    return (
                      <Col md>
                        <Row className=''>
                          <h4
                            style={{
                              color:
                                'color' in group.category
                                  ? group.category.color
                                  : 'white',
                              marginBottom: 0
                            }}
                          >
                            {group.category.name.toUpperCase()}
                          </h4>
                        </Row>
                        <Row className='px-2 pb-3'>
                          {group.brawlers.map((brawler) => {
                            return (
                              <Col key={brawler.id} xs='auto' className='p-1'>
                                <NavLink to={'./' + brawler.id}>
                                  <Image
                                    src={brawler.imageUrl2}
                                    height={80}
                                    title={
                                      'Click to view more information about ' +
                                      brawler.name +
                                      '.'
                                    }
                                    className='brawler-portrait'
                                    style={{
                                      border:
                                        '0px solid ' + brawler.rarity.color
                                    }}
                                  />
                                </NavLink>
                              </Col>
                            );
                          })}
                        </Row>
                      </Col>
                    );
                  })}
                </Row>
              );
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
