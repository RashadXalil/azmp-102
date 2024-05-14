import React from 'react'

const Item = ({ item }) => {
    return (
        <li><img src={item.thumbnail} width="60px" height="60px" alt="" />{item.title}</li>

    )
}

export default Item