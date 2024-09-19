import './NavBar.css'
import { Link } from "react-router-dom";
import IconCart from '../../../public/Vector.png'
import Logo from "/public/Logo.png"
import useShoppingCartStore from '../../Store/ShoppingCart';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useState } from 'react';

function NavBar() {
    const { cartItems } = useShoppingCartStore()
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const [isCartOpen, setIsCartOpen] = useState(false);

    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    };
    function closecart() {
        setIsCartOpen(false)
    }

    return (
        <>
            <nav>
                <div id='LogoDiv'>
                    <img src={Logo} alt="logo" />
                    <label id='TextLogo'> Furniro</label>
                </div>


                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

                <div id='CartDiv' onClick={toggleCart}>

                    <button> <img src={IconCart} alt="IconCart" /></button>

                    <div className='CartNum'>
                        {totalItems}
                    </div>

                </div>

            </nav>
            {isCartOpen &&

                <>
                    <div className="cartOverlay" onClick={closecart}></div>
                    <ShoppingCart closecart={closecart} />
                </>
            }
        </>
    )
}
export default NavBar