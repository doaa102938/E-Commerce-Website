import './Cart.css';
import { Link } from 'react-router-dom';
import VectorIcon from "/public/Vector1.png"
import Logo from "/public/Logo.png"
import EmptyCart from "/public/Emptycart.webp"
import DeleteIcon from "/public/DeleteIcon.png"
import useShoppingCartStore from '../../Store/ShoppingCart';

function Cart() {
    const { cartItems, removeFromCart } = useShoppingCartStore();

    const handleRemove = (productId) => {
        removeFromCart(productId);

    };
    //number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    //total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <div className="CartPage">
            <div className="TopCart">
                <img src={Logo} alt="logo" />
                <h1 className='TitleCart'>Cart</h1>
                <div className='VectorSection'>
                    <Link to="/">Home</Link>
                    <img src={VectorIcon} alt="vectorIcon" />
                    <label >Cart</label>
                </div>
            </div>

            {cartItems.length === 0 ? (

                <div className='CartEmpty'>
                    <img src={EmptyCart} alt="emptycart" />
                    <p className='emptyCart'>Your cart is empty. <Link to="/shop">Go shopping!</Link></p>

                </div>


            ) : (
                <div className='Container'>

                    <div className='shoppingCart'>
                        <div className='Headercart'>
                            <label>Product</label>
                            <label>Price</label>
                            <label>Quantity</label>
                            <label>Subtotal</label>
                            <label className='Deletelabel'>Delete</label>

                        </div>
                        <div className="CartItems">
                            {cartItems.map((item) => (
                                <div className="CartItem" key={item.id}>
                                    <div className='imgAndName'>
                                        <img src={item.image} alt={item.title} className="CartItemImage" />
                                        <label className='cartname'>{item.title}</label>
                                    </div>
                                    <p className='Price'> Rs. {item.price}</p>
                                    <p className='quantity'><span>{item.quantity}</span> </p>
                                    <p className='Subtotal'>Rs. {(item.price * item.quantity).toFixed(2)}</p>
                                    <button onClick={() => handleRemove(item.id)} className='btnRemove'>
                                        <img src={DeleteIcon} alt="DeleteIcon" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="CartCheckout">
                        <h2 className='CartTotals'>Cart Totals</h2>
                        <div className='TotalDiv'>
                            <label className='TotalPrice'>Total</label>
                            <label className='PriceCheckout'> Rs. {totalPrice}</label>
                        </div>
                        <Link to="#">
                            <button className="CheckoutButton">Check Out</button>
                        </Link>
                    </div>
                </div>



            )}


        </div>
    );
}

export default Cart;
