import React from 'react'

const Item = ({ item }) => {
    console.log(item)
    return (
        <div className="col-3 mb-5 mt-5">
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" height="250px" src={item.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.desc}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Item