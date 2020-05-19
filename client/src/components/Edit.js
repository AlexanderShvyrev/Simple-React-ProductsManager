import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Edit = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);

            })
        // eslint-disable-next-line
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log("Response: ", res);
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate(`/api/products/${id}`)
                }
            })
            .catch(err => console.log("Error: ", err));
    }

    return (
        <div className="d-flex justify-content-center form_container m-5">
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    {errors.title ? <p style={{ color: 'red' }}>{errors.title.message}</p> : ""}
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {errors.price ? <p style={{ color: 'red' }}>{errors.price.message}</p> : ""}
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {errors.description ? <p style={{ color: 'red' }}>{errors.description.message}</p> : ""}
                    <textarea
                        rows="4"
                        cols="30"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <input type="submit" className="btn btn-info" value="Update" />
            </form>
        </div>
    )
}

export default Edit
