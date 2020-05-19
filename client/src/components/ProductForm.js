import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(title, price, description)
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log("Response: ", res);
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate('/')
                }
            })
            .catch(err => console.log("Error ", err));
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add new product</h1>
            <div className="d-flex justify-content-center form_container m-5">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        {errors.title ? <p style={{ color: 'red' }}>{errors.title.message}</p> : ""}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title..."
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        {errors.price ? <p style={{ color: 'red' }}>{errors.price.message}</p> : ""}

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Price..."
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        {errors.description ? <p style={{ color: 'red' }}>{errors.description.message}</p> : ""}

                        <textarea
                            rows="4"
                            cols="30"
                            className="form-control"
                            placeholder="Decription..."
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <input type="submit" className="btn btn-info" value="Create" />
                </form>
            </div>
        </div>
    )
}

export default ProductForm
