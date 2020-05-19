import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../components/Products';


const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
        setLoading(true)
    }, [])
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    return (
        <div>
            {loading && <Products products={products} removeFromDom={removeFromDom} />}

        </div>
    )
}

export default Home
