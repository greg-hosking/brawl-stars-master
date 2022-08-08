import { useEffect, useRef, useState } from "react";

function Brawler(props: any) {
  return (
    <>
      <h3>{props.brawler.name}</h3>
      {/* <p>{props.brawler.description}</p> */}
    </>
  );
}

function BrawlersPage() {

  const [brawlers, setBrawlers] = useState<{}[]>([]);

  const shouldFetch = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch.current) {
        shouldFetch.current = false;
        const data = await fetch('https://api.brawlapi.com/v1/brawlers', {
          method: 'GET'
        });
        const jsonData = await data.json();
        console.log(jsonData.list);
        
        jsonData.list.forEach((element: any) => {
          console.log(element.name);
          setBrawlers(_brawlers => [..._brawlers, element]);
        });
      }
      
    };
    
    fetchData();
  });
  
  
  console.log(brawlers)
  return (
    <>
      <h1>BRAWLERS</h1>
      <h2>There are: {brawlers.length} playable characters</h2>
      {brawlers.map((element) => {
        return (
          <Brawler brawler={element} />
        )
      })}
    </>
  );
}

export default BrawlersPage;
