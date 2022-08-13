import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BrawlerOverview from '../components/brawlers/BrawlerOverview';
import { Brawler } from '../interfaces/Brawler';

const BrawlerPage: React.FunctionComponent = () => {
  const [brawler, setBrawler] = useState<Brawler>();
  const { id } = useParams();

  const navigate = useNavigate();

  const shouldFetch = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        fetch('https://api.brawlapi.com/v1/brawlers/' + id)
          .then((res) => res.json())
          .then((result) => setBrawler(result))
          .catch(() => navigate('../brawlers', { replace: true }));
      }
    };

    fetchData();
  });

  return (
    <>{brawler && <BrawlerOverview brawler={brawler}></BrawlerOverview>}</>
  );
};

export default BrawlerPage;
