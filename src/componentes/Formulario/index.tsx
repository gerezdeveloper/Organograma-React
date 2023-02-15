import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Botao from '../Botão';
import ListaSuspensa from '../ListaSuspensa';
import SpaceTexto from '../SpaceText';
import './Formulario.css';


interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]

}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const inSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={event => inSave(event)}>
                <h2>Preencha os dados para criar o card</h2>
                <SpaceTexto
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor = {nome}
                    whenChanging = {valor => setNome(valor)}
                 />
                <SpaceTexto 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    valor = {cargo}
                    whenChanging = {valor => setCargo(valor)}
                />
                <SpaceTexto 
                    mandatory={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor = {imagem}
                    whenChanging = {valor => setImagem(valor)} 
                />
                <SpaceTexto
                    label='Data de entrada no time'
                    placeholder=''
                    valor={data}
                    whenChanging={valor => setData(valor)}
                    tipo='date'
                />
                <ListaSuspensa 
                    mandatory={true} 
                    label="Squad" 
                    itens={props.times}
                    valor = {time}
                    whenChanging = {valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario;