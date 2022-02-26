import React from "react";
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className = {c.nav}>
            <div>
            <a className = {c.link}>Profile</a>
            </div>
            <div>
            <a className = {c.link}>Messages</a>
            </div>
            <div>
            <a className = {c.link}>News</a>
            </div>
            <div>
            <a className = {c.link}>Music</a>
            </div>
            <div>
            <a className = {c.link}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;