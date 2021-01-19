import React from 'react';
import { connect } from 'react-redux';

import { ToggleCartHidden } from '../../redux/Cart/Cart.action';
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

import './Cart-icon.styles.scss';

const CartIcon = ({ ToggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={ToggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
