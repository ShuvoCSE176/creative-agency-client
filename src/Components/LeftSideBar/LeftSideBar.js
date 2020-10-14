import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import './LeftSideBar.css';

const LeftSideBar = () => {
    return (

            <div>
                 <Link to='/'>
                        <img className="mt-3 ml-4 mb-5" style={{ width: '160px', height: '66px' }} src={logo} alt="" />
                    </Link>

                    <div className="container ml-5 mt-5">

                        <Link style={{ textDecoration: 'none', color: 'black' }}> <p className='orderMenu'>Order</p></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/serviceList'><p className='orderMenu'>Service List</p></Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/review'> <p className='orderMenu'>Review</p></Link>

                    </div>
            
            </div>
            
        
    );
};

export default LeftSideBar;