import './index.css'
import CartWidget from '../CartWidget/cartWidget'

const Navbar = () => {
    return(
        <div>
            <ul className= "navbar">
                <li><a className= "items-navbar" href="">Home</a></li>
                <li><a className= "items-navbar" href="">Market</a></li>
                <li><a className= "items-navbar" href="">About Us</a></li>
                <li><a className= "items-navbar" href=""><CartWidget/></a></li>
            </ul>
        </div>

    )
}
export default Navbar