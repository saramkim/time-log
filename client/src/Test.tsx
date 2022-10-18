import { useEffect, useState } from 'react';

import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/test';

function Test() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setData(response.data);
  };
  const onSubmitHandelr = async (e: any) => {
    e.preventDefault();
    const text = e.target.text.value;
    await axios.post(SERVER_URL, { text });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.map((v: any) => (
        <div key={v.id}>
          <div>{v.id}</div>
          <div>{v.text}</div>
        </div>
      ))}
      <form onSubmit={onSubmitHandelr}>
        <input name='text' />
        <button>test</button>
      </form>
    </>
  );
}

export default Test;
