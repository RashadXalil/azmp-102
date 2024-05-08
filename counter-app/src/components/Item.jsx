import React from 'react'
import './Item.css'
const Item = ({ item }) => {
    return (
        <div className="col-3 mb-5">
            <div className={`card ${item.isBestSeller ? "gold" : ""}`} style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}

export default Item