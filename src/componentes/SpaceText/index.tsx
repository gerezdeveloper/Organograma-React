import './SpaceText.css';


interface SpaceTextProps {
    whenChanging: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    mandatory?: boolean
    tipo?: 'text' | 'password' | 'date' | 'e-mail' | 'number'
}

const SpaceTexto = ({ whenChanging, label, placeholder, valor, tipo = 'text', mandatory = false }: SpaceTextProps) => {


    const whenTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
        whenChanging(event.target.value)
    }
    return (
        <div className="space-text">
            <label>{label}</label>
            <input 
            value={valor} 
            onChange={whenTyping} 
            required={mandatory} 
            placeholder={placeholder}
            type={tipo} />
        </div>
    )
}

export default SpaceTexto;