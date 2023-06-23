import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <nav>
            <ul>
                {/* <li>
                <Link to="/">Inicio</Link>
                </li> */}
                <li>
                <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                <Link to="/About">About</Link>
                </li>
                <li>
                <Link to="/Home">Home</Link>
                </li>
                {/* Agrega más elementos de menú con los enlaces que desees */}
            </ul>
            </nav>
      </header>
    )
  }
  
  export default Header
  