import React, { useState } from "react";
import Header from "../components/Header";
import '../pages/product.css';

function Product () {

  const [valor, setValor]=useState(0);

  const idItem = JSON.parse(localStorage.getItem('product'))

  const addItem = () => {
    setValor(prev => ({ valor: prev.valor + 1 }));
  }


  return(
    <div className="productPage">
       <Header />
      <div className="contProduct">
      <img src={idItem.image}/>
      <div className="productArea">

  
      <h1>{idItem.name}</h1>
      <p>{idItem.country} {idItem.classification} {idItem.size}</p>
      <p>{`R$${idItem.priceMember}`}</p>
      <p>{`NÃO SOCIO R$${idItem.price}/UN.`}</p>
      <h2>Comentario Sommelier</h2>
      <p>{idItem.sommelierComment}</p>
      
      <div><button
      onClick={()=>{setValor(valor +1)}}>
        +
      </button>

      <button
      valor ={valor}
      onClick={addItem}>
        {valor}
      </button>

      <button
      onClick={()=>{setValor(valor -1)}}>
        -
      </button>

      <button>
        Adicionar
      </button>
      </div>
      </div>

      </div>
    </div>
  )


}

export default Product;
