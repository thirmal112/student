import React, { useEffect, useState } from 'react';

function Https() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <>
      <h1>Fetch data with HTTP request</h1>
      {
        data.map(item =>
          <li key={item.id}><b>{item.id}</b><br></br>{item.name}</li>
        )
      }
    </>
  );
}

export default Https;
