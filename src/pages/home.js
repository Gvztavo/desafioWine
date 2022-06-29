import React, { useEffect, useState } from 'react';
import './home.css';
import Header from '../components/Header';

function Home() {

  const [ data, setData ] = useState([]);
  const [ itensPerPage] = useState(9);
  const [ currentPage, setCurrentPage ] = useState(0);

  //Paginação.
  const pages = Math.ceil(data.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex, endIndex);

  useEffect(() => {
    fetch('https://wine-back-test.herokuapp.com/products')
    .then((response) => response.json())
    .then((json) => setData(json.items));
  },[])


  return (
    <div className='home'>
      <Header />
      <p>{`${data.length} produtos encontrados`}</p>

      <div className='cont'>
        {currentItens.map((item) =>
       <div className='cardItem' key={item.id}>
        {item.name}
        <img src={item.image} />
        {item.price}
        <button>Adicionar</button>
       </div> )}
      </div>
      <div>
          {Array.from(Array(pages),(data,index) => {
            return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index}</button>
          })}
        </div>
    </div>
  );
}

export default Home;
