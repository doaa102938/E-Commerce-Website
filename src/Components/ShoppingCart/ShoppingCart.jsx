import './ShoppingCart.css'
import close from '/public/Bag.png'
import DeleteProduct from "/public/deleteProduct.png"
import useShoppingCartStore from '../../Store/ShoppingCart'
import EmptyCart from "/public/Emptycart.webp"
import { Link } from 'react-router-dom'
function ShoppingCart({ closecart }) {
    const { cartItems, removeFromCart } = useShoppingCartStore()
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity.toFixed(2), 0);
    const handleRemove = (productId) => {
        removeFromCart(productId);
    }
    return (
        <div className='ShoppingCart'>
            <div className='close' onClick={closecart}>
                <img src={close} alt="close" className='closeIcon' />
            </div>

            <label className='TitleShopingCart'>Shopping Cart</label>
            <hr />
            {cartItems.length === 0 ? (
                <div className='CartEmpty'>
                    <img src={EmptyCart} alt="emptycart" className='emptyCart' />
                    <p className='emptyCart'>Your cart is empty. <Link to="/shop">Go shopping!</Link></p>

                </div>
            ) : (

                <div className='CartItemWrapper'>
                    {cartItems.map((item) => (
                        <div className='CartItem' key={item.id}>
                            <div className='DetailsProductcart'>
                                <img src={item.image} alt={item.title} className="CartItemImage" />
                                <div>
                                    <label className='productName'>{item.title}</label>
                                    <div className='QuantityAndPrice' >
                                        <label>{item.quantity}</label>
                                        <span className='sympolmuilt'>&#9747;</span>
                                        <label className='productPrice'>Rs. {item.price}</label>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(item.id)} className='DeleteIconCart'>
                                    <img src={DeleteProduct} alt="DeleteIcon" />
                                </button>
                            </div>


                        </div>
                    ))}

                    <div className='SubTotalDiv'>
                        <label className='SubtotalCart'>Subtotal</label>
                        <label className='TotalPriceCart'>Rs. {totalPrice}</label>
                    </div>
                    <hr />

                    <Link to="/cart" className='Cartbutton' >Cart</Link>



                </div>
            )}

        </div>

    )
}
export default ShoppingCart