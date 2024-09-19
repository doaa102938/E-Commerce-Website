import { Link } from 'react-router-dom';
import './Home.css'
import Homeimg from "/public/BackgroundHome.png"
import { useState, useEffect } from 'react';
function Home() {
    const [categories, setCategories] = useState([])
    const [categoriesImages, setCategoriesImages] = useState([
        { img: "/electronics.png", id: 1, category: "electronics" },
        { img: "/jewelery.png", id: 2, category: "jewelery" },
        { img: "/men's clothing.jpeg", id: 3, category: "men's clothing" },
        { img: "/clothes-women.jpg", id: 4, category: "women's clothing" }
    ])

    useEffect(() => {
        function CallApi() {
            fetch("https://fakestoreapi.com/products/categories")
                .then((response) => {
                    return response.json();
                })
                .then((finalResult) => {
                    setCategories(finalResult);
                });
        }
        CallApi();
    }, []);

    return (
        <>
            <img src={Homeimg} alt="Homeimage" id='HomeImage' />
            <div className='HomePage'>

                <h1 id='TitleHome'>Categories</h1>

                <div className='categoriesItems' >
                    {
                        categories.map((item) => {
                            const image = categoriesImages.find(img => img.category === item);

                            return (
                                <Link to={`/shop?category=${item}`}>
                                    <div key={item} className='categoryItem'>
                                        {image && <img src={image.img} alt={item} className='categoryImage' />}
                                        <button className='categoryName'>{item}</button>
                                    </div>
                                </Link>

                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Home