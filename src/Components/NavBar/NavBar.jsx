import './NavBar.css'
import { Link } from "react-router-dom";
import IconCart from '/Vector.png'
import IconMenu from '/menu.svg'
import close from "/close.png"

import Logo from "/public/Logo.png"
import useShoppingCartStore from '../../Store/ShoppingCart';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { useState } from 'react';

function NavBar() {
    const { cartItems } = useShoppingCartStore()
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    };
    function closecart() {
        setIsCartOpen(false)
    }

    function toggleMenu() {
        let newMenuValue = !menuOpen
        setMenuOpen(newMenuValue);

    }
    function closemenu() {
        setMenuOpen(false)
    }


    return (
        <>
            <nav>

                <button className="menuToggle" onClick={toggleMenu}>
                    <img src={IconMenu} alt="menu" />
                </button>


                <div id='LogoDiv'>
                    <img src={Logo} alt="logo" />
                    <label id='TextLogo'> Furniro</label>
                </div>


                <ul className={menuOpen ? 'menu-open' : 'menu-closed'} >

                    {menuOpen && (

                        <img src={close} className="closeMenu" onClick={closemenu} alt="Close Menu" />

                    )}
                    <li>
                        <Link to="/" onClick={closemenu}>Home</Link>
                    </li>

                    <li>
                        <Link to="/shop" onClick={closemenu} >Shop</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closemenu}>Contact</Link>
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