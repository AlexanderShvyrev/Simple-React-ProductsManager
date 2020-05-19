import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

const Products = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                removeFromDom(id)
            })
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Products</h1>
            {props.products.map((prod, idx) => {
                return (
                    <div className="container" key={prod._id}>
                        <div className="row">
                            <div className="col-sm">
                                <div className="card" >
                                    <div className="card-body">
                                        <h4 className="card-title"><Link to={`/api/products/${prod._id}`}>{prod.title}</Link></h4>
                                        <button className="btn btn-danger" onClick={(e) => { deleteProduct(prod._id) }}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Products
