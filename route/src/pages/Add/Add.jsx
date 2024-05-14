import axios from 'axios';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Add = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [desc, setDesc] = useState("")
    const addNewProduct = () => {
        const newProduct = {
            id: uuidv4(),
            title: title,
            image: image,
            desc: desc
        }
        axios.post("http://localhost:3001/products", { ...newProduct }).then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            <input type="text" placeholder='title' onChange={(e) => {
                setTitle(e.target.value)
            }} />
            <input type="text" placeholder='image' onChange={(e) => {
                setImage(e.target.value)
            }} />
            <input type="text" placeholder='desc' onChange={(e) => {
                setDesc(e.target.value)
            }} />
            <button onClick={() => {
                addNewProduct()
            }}>submit</button>
        </div>
    )
}

export default Add