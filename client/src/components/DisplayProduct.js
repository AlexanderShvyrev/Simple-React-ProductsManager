import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const DisplayProduct = (props) => {
    const [product, setProduct] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => { setProduct({ ...res.data }) })

        // eslint-disable-next-line
    }, [])
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">{product.title}</h1>
                <p className="lead"> <em>Description: </em>{product.description} <br />
                    <em>Price: </em>${product.price}</p>
                <Link to={`/products/${product._id}/edit`}><button className="btn btn-success">Edit</button></Link>

            </div>
        </div>
    )
}

export default DisplayProduct
