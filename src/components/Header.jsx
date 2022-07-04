import React from 'react';
import './Header.css';
import imagem1 from './image/wine.jpg';
import imagem2 from './image/found.png';
import imagem3 from './image/perfil.png';
import imagem4 from './image/logo.png';

function Header() {
  
  const imgLogo = imagem4;

  const imgPerfil=imagem3;

  const procurarImg= imagem2;

  const carrinhoImg= imagem1;

  return (
    <div className='header'> 
      <img src={imgLogo} className='logo' />
      <div className='nav'>
      <b>Clube</b>
      <b>Loja</b>
      <b>Produtores</b>
      <b>Ofertas</b>
      <b>Eventos</b>
      </div>
      <div></div>
      <div>
      <img src={procurarImg} className='perfil' />
      <img src={imgPerfil} className='perfil'/>
      <img src={carrinhoImg} className='perfil'/>
      </div>
    </div>
  );
}

export default Header;
