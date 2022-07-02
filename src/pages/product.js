import React, { useState } from "react";

function Product () {

  const [valor, setValor]=useState(0);

  const idItem = JSON.parse(localStorage.getItem('product'))

  const addItem = () => {
    setValor(prev => ({ valor: prev.valor + 1 }));
  }


  return(
    <div>
      <img src={idItem.image}/>
      <h1>{idItem.name}</h1>
      <h3>{idItem.country} {idItem.classification} {idItem.size}</h3>
      <p>{`R$${idItem.priceMember}`}</p>
      <p>{`NÃO SOCIO R$${idItem.price}/UN.`}</p>
      <h2>Comentario Sommelier</h2>
      <p>{idItem.sommelierComment}</p>

      <button
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
  )


}

export default Product;
