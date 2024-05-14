import React, { useEffect, useState } from 'react'
import Item from '../../components/Item'

const Shop = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/products").then(res => res.json()).then(data => {
            setData(data)
        })
    }, [])
    return (
        <div className='container'>
            <div className="row">
                {
                    data && data.map((item, index) => {
                        return <Item item={item} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Shop