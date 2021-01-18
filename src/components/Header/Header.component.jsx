import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../Assets/shop-trade.svg';
import { auth } from '../../Firebase/Firebase.utils';

import './Header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/about-us'>
                    About Us
                </Link>
                <Link className='option' to='/our-stores'>
                    Our Stores
                </Link>
                <Link className='option' to='/contact-us'>
                    Contact Us
                </Link>
                {
                    currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
                    ):(
                    <Link className='option' to='/signin'>Sign In</Link>
                    )
                }
                
            </div>
        </div>
    )
}

export default Header;
