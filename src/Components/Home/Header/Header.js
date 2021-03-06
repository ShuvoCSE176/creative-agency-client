import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Items from '../Items/Items';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <section className='bg-skew'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
           
        </section>
    );
};

export default Header;