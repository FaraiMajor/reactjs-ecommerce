import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <div className='checkout-el'>
                <p className='cart-total'>
                    Your Bag Total: <span className='total-el'>${cartTotal}</span>
                </p>
                <Button onClick={goToCheckoutHandler}>View Bag & Checkout</Button>
            </div>
        </div>
    );
};

export default CartDropdown;