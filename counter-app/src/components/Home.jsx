import React from 'react'
import List from './List'

const Home = ({ products }) => {
    return (
        <div>
            <List products={products} />
        </div>
    )
}

export default Home