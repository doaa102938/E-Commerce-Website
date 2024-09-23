import './Shop.css'
import VectorIcon from "/public/Vector1.png"
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useShoppingCartStore from '../../Store/ShoppingCart'
import useCounterStore from '../../Store/Counter'
function Shop() {

    const { addToCart } = useShoppingCartStore();
    const { count } = useCounterStore();


    const [shopProduct, setShopProduct] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);


    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const location = useLocation();



    useEffect(() => {

        const params = new URLSearchParams(location.search);
        const selectedCategory = params.get("category");
        const categoryEndpoint = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : 'https://fakestoreapi.com/products';

        fetch(categoryEndpoint)
            .then((response) => response.json())
            .then((data) => {
                setShopProduct(data);
                setFilteredProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });

    }, [location]);

    //button Add to cart
    function handleAddToCart(product) {
        const countProdcut = count + 1
        const productWithQuantity = { ...product, quantity: countProdcut };
        addToCart(productWithQuantity);
        console.log('Added to cart:', productWithQuantity);

    }


    //Pagination

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className='ShopPage'>
                <h1 className='TitleShop'>Shop</h1>
                <div className='VectorSection'>
                    <Link to="/">Home</Link>
                    <img src={VectorIcon} alt="vectorIcon" />
                    <label >Shop</label>
                </div>
            </div>
            <div className='Products'>
                <div className='AllProducts'>
                    {currentItems.map((product) => {
                        return (<>
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <div className='ProductItem' >
                                    <img src={product.image} className='ProductImage' />
                                    <div className='TitleAndPrice'>
                                        <label className='productTitle'>{product.title}</label>
                                        <label className='ProductPric'> <span>Rp  </span> {product.price}</label>
                                    </div>
                                    <button className="addToCartButton" onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(product);
                                    }}>Add to Cart</button>

                                </div>
                            </Link>
                        </>
                        )
                    })}

                </div>
            </div>


            <div className='pagination'>

                {[...Array(totalPages).keys()].map(number => (
                    <a
                        href="#"
                        key={number + 1}
                        onClick={(e) => {
                            e.preventDefault();
                            paginate(number + 1);
                        }}
                        className={currentPage === number + 1 ? 'active' : ''}
                    >
                        {number + 1}
                    </a>
                ))}

            </div>
        </>
    )
}
export default Shop