import { React } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/">
                <h4>MS</h4>
            </NavLink>
            <nav>
                <NavLink className='nav'>Accueil</NavLink>
                <NavLink className='nav'>Programmes</NavLink>
                <NavLink className='nav'>A propos</NavLink>
            </nav>
        </header>
    )
}
  
export default Header;