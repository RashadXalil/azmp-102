import { useState } from "react";
import Home from "./components/Home";

function App() {
    const products = [{
        id: 1,
        name: "Iphone 9",
        price: 900,
        isBestSeller: false
    },
    {
        id: 2,
        name: "Iphone X",
        price: 1000,
        isBestSeller: true
    },
    {
        id: 3,
        name: "Iphone XS",
        price: 1100,
        isBestSeller: false
    },
    {
        id: 4,
        name: "Iphone XS Max",
        price: 1200,
        isBestSeller: false
    },
    {
        id: 5,
        name: "Samsung 11",
        price: 900,
        isBestSeller: true
    },
    {
        id: 1,
        name: "Xiaomi Note 7",
        price: 400,
        isBestSeller: false
    },
    ]
    return (
        <div className="App">
            <Home products={products} />
        </div>
    );
}

export default App;
