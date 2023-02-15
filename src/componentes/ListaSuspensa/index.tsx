import './ListaSuspensa.css';

interface ListaSuspensaProps {
    whenChanging: (valor: string) => void
    label: string
    mandatory: boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={event => 
                props.whenChanging(event.target.value)} 
                required={props.mandatory} 
                value={props.valor}
            >
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;