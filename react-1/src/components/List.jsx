import React from 'react'
import Item from './Item'

const List = () => {
    const items = [
        {
            id: 1,
            name: "kofta",
            price: 20,
            isBestSeller: false
        },
        {
            id: 2,
            name: "salvar",
            price: 19,
            isBestSeller: true
        },
        {
            id: 3,
            name: "kurtka",
            price: 200,
            isBestSeller: false
        },
        {
            id: 4,
            name: "ayaqqabi",
            price: 59,
            isBestSeller: true
        },
        {
            id: 5,
            name: "kepka",
            price: 2,
            isBestSeller: false
        },
        {
            id: 5,
            name: "koynek",
            price: 15,
            isBestSeller: false
        },

    ]
    return (
        <div>{
            items.map((item, index) => {
                return (<Item item={item} key={index} />)
            })
        }</div>
    )
}

export default List