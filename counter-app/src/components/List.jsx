import React from 'react'
import Item from './Item'

const List = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {
                    products.map((item, index) => {
                        return <Item key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default List