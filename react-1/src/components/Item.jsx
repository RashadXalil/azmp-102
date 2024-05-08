import React from 'react'

const Item = ({ item }) => {
    return (
        <div>{item.name} {item.isBestSeller ? <span style={{ color: "gold" }}>best seller</span> : ""}</div>
    )
}

export default Item