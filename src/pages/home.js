import React, { useEffect, useState } from 'react';
import './home.css';
import Header from '../components/Header';

function Home() {

  const [ data, setData ] = useState([]);
  const [ itensPerPage] = useState(9);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ filterItems, setFilterItems] = useState(500);

  useEffect(() => {
    fetch('https://wine-back-test.herokuapp.com/products')
    .then((response) => response.json())
    .then((json) => setData(json.items));
  },[])

  //Paginação.
  const pages = Math.ceil(data.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex, endIndex);


  //Filtro
  const handleChange = (event) => {
    const filtered = data.filter(itens => {
      return itens.price <= event.target.value;
     
    });
    setData(filtered);
    console.log(filtered)
  }


  return (
    <div className='home'>
      <Header />
      <div className='mainCont'>
      <p className='found'>{`${data.length} produtos encontrados`}</p>
      <div>
      <h1>Refine sua busca</h1>
      <p>Por preço</p>

      <input
        type="radio"
        value="40"
        onChange={handleChange}

      />Até R$40<br/>

        <input
        type="radio"
        value="60"
        onChange={handleChange}
      />R$40 A R$60<br/>
        
        <input
        type="radio"
        value="100"

        onChange={handleChange}
      />R$100 A R$200<br/>
        
        <input
        type="radio"
        value="200"
        onChange={handleChange}
      />R$200 A R$500<br/>
       
       <input
        type="radio"
        value="500"
      
        onChange={handleChange}
      />Acima de R$500<br/>

      </div>

      <div className='conteudo'>
        
        {currentItens.map((item) =>
       <div className='cardItem' key={item.id}>
        
        <img src={item.image} className='wine'/>
        <p>{item.name}</p>
       {/* colocar desconto */}
        
        <p>{`Sócio WINE R$${item.priceMember}`}</p>
        <p>{`NÃO SOCIO R$${item.price}`}</p>
        <button>Adicionar</button>
       </div> )}
        </div>
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
