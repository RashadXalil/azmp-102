import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../../context/context'

const Card = ({ item }) => {
    const { addToWishlist } = useContext(MainContext)
    return (
        <div className="col-3 mb-5 mt-5">
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={item.thumbnail} height="200px" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.title.slice(0, 15)}...</h5>
                    <p class="card-text">{item.description.slice(0, 20)}...</p>
                    <Link to={`detail/${item.id}`}>Detail</Link> <br />
                    <button className='mt-2 btn btn-warning' onClick={() => {
                        addToWishlist(item)
                    }}>add to wishlist</button>
                </div>
            </div>
        </div>
    )
}

export default Card