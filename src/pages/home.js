import React, { useEffect, useState } from 'react';
import './home.css';
import Header from '../components/Header';

function Home() {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10')
    .then((response) => response.json())
    .then((json) => setData(json.items));
  },[])

  console.log(data)

  return (
    
      <div className='home'>
        <Header />
        {data.map((item) =>
       <div key={item.id}>
        {item.name}
        <img src={item.image} />
        {item.price}
        <button>Adicionar</button>
       </div> )}
       
      </div>
  );
}

export default Home;
