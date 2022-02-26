import React from "react";
import c from './Header.module.css';

const Header = () => {
    return (
        <header className = {c.header}>
            <div className = {c.headerElements}>
                <img src= 'https://cdn.pixabay.com/photo/2016/08/15/18/18/bmw-1596080_960_720.png'alt = 'logo'></img>
                <h1>BMW as a lifestyle </h1>
            </div>
        </header>
    );
}

export default Header;