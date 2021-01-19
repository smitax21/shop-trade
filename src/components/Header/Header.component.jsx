import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo} from '../../Assets/shop-trade.svg';
import { auth } from '../../Firebase/Firebase.utils';
import  CartIcon  from '../Cart-icon/Cart-icon.component';
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component';

import './Header.styles.scss';

const Header = ({ currentUser, hidden }) => {
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
            < CartIcon />
            {
                hidden ? null : < CartDropdown />
            }
        </div>
    )
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Header);
