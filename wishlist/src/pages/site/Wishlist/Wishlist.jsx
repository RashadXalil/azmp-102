import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
    const { wishlistItems, deleteItemFromWishlist } = useContext(MainContext)
    let totalPrice = 0
    return (
        <>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">image</th>
                        <th scope="col">title</th>
                        <th scope="col">price</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlistItems.map((item, index) => {
                            totalPrice += item.price
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img src={item.thumbnail} width="60px" height="60px" alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price} AZN</td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        deleteItemFromWishlist(item)
                                    }}>delete</button></td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
            <div className="container">
                <h1>TotalPrice:{totalPrice} AZN</h1>
            </div>
        </>
    )
}

export default Wishlist