import React from 'react';

import data from '../../data/signos'
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

import './style.css';

export default function ListaDeSignos() {

  const listaSignos = data.map(signo => {
    return(
      <div key= {signo.id}>
        <ItemLista 
          signo={signo.signo}
          dataInicio={signo.dataInicio}
          dataFim={signo.dataFim}
          imagem={signo.imagem}
        />
      </div>
    )
  })

  return (
    <div>
      <Titulo />
      <div className="lista">
        {listaSignos}
      </div>
    </div>
  )
}