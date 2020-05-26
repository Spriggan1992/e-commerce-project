import React from 'react';
import './cart-dropdown.styles.scss';

import CostomButton from '../costom-button/costom-button.component';



const CartDropdown = () => (
    <div className="cart-dropdown" >
        <div className="cart-item" />
        <CostomButton>GO TO CHECKOUT</CostomButton>
    </div>
)



export default CartDropdown;