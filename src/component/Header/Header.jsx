import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;