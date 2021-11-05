import React from 'react'
import { Context } from '../index';
import { useContext } from 'react';

const NavBar = () => {
    const { User } = useContext(Context)
    return (
        <NavBar>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">CINEMA</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </NavBar>
    )
}

export default NavBar;


