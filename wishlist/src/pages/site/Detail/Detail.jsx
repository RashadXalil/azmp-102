import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'

const Detail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then(res => {
            setItem(res.data)
        })
    })
    return (
        <>
            <Helmet>
                <title>{item.title}</title>
            </Helmet>
            <div><img src={item.thumbnail} alt="" /></div>
        </>
    )
}

export default Detail