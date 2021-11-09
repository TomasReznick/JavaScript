import './index.css'

const Input = (props) => {
    console.log(props)
    return (
        <input className='input-styles' type={props.queTipoSoy} placeholder={props.queDigo} />
    )
}

export default Input