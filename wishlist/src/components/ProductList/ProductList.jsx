import React from 'react'
import Card from '../Card/Card'

const ProductList = ({ data }) => {
    return (
        <div className='container'>
            <div className="row">
                {
                    data.map((item, index) => {
                        return (
                            <Card item={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList