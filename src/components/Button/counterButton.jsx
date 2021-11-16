import { Fragment, useState} from 'react'
import './index.css'

function CounterButton () {
        const [number, setNumber] = useState(0)

        const incrementar = () => {
            setNumber(number + 1)
        }

        const disminuir = () => {
            setNumber(number - 1)
        }

        return (
            <Fragment>
                <h1>{number}</h1>
                <button onClick={incrementar}>+</button>
                <button onClick={disminuir}>-</button>
            </Fragment>
        )

}





export default CounterButton