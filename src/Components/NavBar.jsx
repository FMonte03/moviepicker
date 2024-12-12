import React from "react";
import {Link} from 'react-router-dom'
import Logo from '../Logo.png'

function NavBar(){
return(
<div className="NavBar">
    <div className="Logo"><img src={Logo} alt="" /></div>
    <ul className="rightLinks">
        <Link to={'/'}>
            <li>Home</li>
        </Link>
        <Link to={'/SearchByGenre'}>
            <li>Search By Genre</li>
        </Link>
        <Link to={'/SearchByActor'}>
            <li>Search By Actor</li>
        </Link>
    </ul>
</div>

)

}

export default NavBar