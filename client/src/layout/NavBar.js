import React from 'react'
import { Link } from '@reach/router';

const NavBar = () => {
    return (
        <nav className="navbar bg-dark">
            <h3 style={{ color: "white" }}>Products manager</h3>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/new'>Add</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
