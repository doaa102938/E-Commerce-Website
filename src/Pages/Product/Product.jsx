import './Product.css'
import { useParams } from 'react-router-dom'
import VectorIcon from "/public/Vector1.png"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Iconfacebook from '/public/akar-icons_facebook-fill.png'
import Iconlinkedin from '/public/akar-icons_linkedin-box-fill.png'
import Icontwitter from '/public/ant-design_twitter-circle-filled.png'
import useCounterStore from '../../Store/Counter'
import useShoppingCartStore from '../../Store/ShoppingCart'
function Product() {
    const { id } = useParams()
    const { count, increase, decrease, reset } = useCounterStore()
    const { addToCart } = useShoppingCartStore()



    const [productDetails, setProductDetails] = useState(null)
    useEffect(() => {
        function CallApi() {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((response) => {
                    return response.json();
                })
                .then((finalResult) => {
                    setProductDetails(finalResult);
                });
        }
        CallApi();
    }, [id]);
    if (!productDetails) {
        return <p>Loading...</p>;
    }

    function handleAddToCart() {



        if (count > 0) {
            const productQuantity = { ...productDetails, quantity: count };
            addToCart(productQuantity);
            console.log("Added to cart:", productQuantity);

            reset();
        } else {
            alert('Please select at least 1 item to add to cart.');

        }

    };
    return (
        <>
            <div className="productContainer" >
                <div className='DetailsWrapper'>
                    <div className='productTop'>
                        <Link to="/">Home</Link>
                        <img src={VectorIcon} />
                        <Link to="/shop">Shop</Link>
                        <img src={VectorIcon} />
                        <label className='ProductTitle'>{productDetails.title}</label>
                    </div>


                    <div className='ProductDetails'>
                        <div className='ImgDiv'>
                            <img src={productDetails.image} alt={productDetails.title} className='ImgProduct' />
                        </div>
                        <div className='OtherDetails'>
                            <h1 className='ProductName'>{productDetails.title}</h1>
                            <p className='ProductPrice'>Rs. {productDetails.price}</p>
                            <p className='Rating'>{productDetails.rating.rate} Customer Review</p>
                            <p className='ProductDesc'>{productDetails.description}</p>
                            <div className='Buttons'>
                                <div className='Counter'>
                                    <button onClick={decrease}>-</button>
                                    <label>{count}</label>
                                    <button onClick={increase}>+</button>


                                </div>
                                <button className='ButtonAddToCart' onClick={handleAddToCart}>Add To Cart</button>
                            </div>
                            <hr />
                            <div className='threedots'>
                                <div className='sku'>
                                    <label>SKU :</label>
                                    <label>SS001</label>
                                </div>
                                <div className='categorySection'>
                                    <label>Category :</label>
                                    <label>{productDetails.category}</label>
                                </div>
                                <div className='share'>
                                    <label>Share :</label>
                                    <div className='IconSocailMedia'>
                                        <img src={Iconfacebook} alt="facebook" />
                                        <img src={Iconlinkedin} alt="linkedin" />
                                        <img src={Icontwitter} alt="twitter" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>
            <div className='DescriptionDiv' >
                <label className='DescriptionTitle'>Description</label>
                <p className='DescriptionPrag'>{productDetails.description}</p>
            </div>

        </>



    )
}
export default Product