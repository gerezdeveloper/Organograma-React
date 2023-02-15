import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Banner from './componentes/Banner';
import { IColaborador } from './compartilhado/interfaces/IColaborador';

function App() {

  const times = [
    {
      nome: 'Gestão',
      corPrimaria: '#696969',
      corSecundaria: '#363636'
    },
    {
      nome: 'Análises',
      corPrimaria: '#32CD32',
      corSecundaria: '#008000'
    },
    {
      nome: 'Development',
      corPrimaria: '#4B0082',
      corSecundaria: '#8A2BE2'
    },
    {
      nome: 'Quality Assurance',
      corPrimaria: '#800000',
      corSecundaria: '#B22222	'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#6495ED',
      corSecundaria: '#4169E1'
    },
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
