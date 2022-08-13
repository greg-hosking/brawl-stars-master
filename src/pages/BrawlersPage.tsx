import { useEffect, useRef, useState } from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Brawler } from '../interfaces/Brawler';

function BrawlersPage() {
  const [brawlers, setBrawlers] = useState<Brawler[]>([]);

  const shouldFetch = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        const data = await fetch('https://api.brawlapi.com/v1/brawlers', {
          method: 'GET'
        });
        const jsonData = await data.json();

        setBrawlers(jsonData.list);
      }
    };

    fetchData();
  });

  return (
    <>
      <h1>BRAWLERS</h1>
      {brawlers.map((brawler) => {
        return (
          <NavLink to={'./' + brawler.id}>
            <h1>{brawler.name}</h1>
          </NavLink>
        );
      })}
    </>
  );
}

export default BrawlersPage;
