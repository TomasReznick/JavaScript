import Input from "../../components/Input/Input"

const Login = () => {
    return(
        <section className="login-wrapper">
            <form className= "inputs-container">
                <h1>Customer Login</h1>
                <Input queTipoSoy='text' queDigo='soy el email' />
                <Input queTipoSoy='password' queDigo='soy el password' />
                <button type="submit"></button>
            </form>

        </section>
    )
}

export default Login