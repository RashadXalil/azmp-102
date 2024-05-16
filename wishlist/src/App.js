import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context"
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function App() {
    const [data, setData] = useState([])
    const [wishlistItems, setWishlistItems] = useState(localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then(res => {
            setData(res.data.products)
            setLoading(false)
        }).catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [])
    const addToWishlist = (item) => {
        const target = wishlistItems.find((wishlistItem) => wishlistItem.id == item.id)
        if (!target) {
            setWishlistItems([...wishlistItems, item])
            localStorage.setItem("wishlistItems", JSON.stringify([...wishlistItems]))
            toast.success(`${item.title} adli mehsul wishliste elave edildi`)
        }
        else {
            toast.error(`${target.title} adli mehsul artiq wishlistdedir`)
        }
    }
    const deleteItemFromWishlist = (item) => {
        const target = wishlistItems.find(x => x.id == item.id)
        const indexOfTarget = wishlistItems.indexOf(target)
        wishlistItems.splice(indexOfTarget, 1)
        setWishlistItems([...wishlistItems])
        localStorage.setItem("wishlistItems", JSON.stringify([...wishlistItems]))
        toast.success(`${item.title} adli item wishlistden silindi`)
    }
    const contextData = {
        data, loading, error, setData, setLoading, setError, wishlistItems, setWishlistItems, addToWishlist, deleteItemFromWishlist
    }
    const router = createBrowserRouter(ROUTES)
    return (
        <MainContext.Provider value={contextData}>
            <RouterProvider router={router} />
            <Toaster />
        </MainContext.Provider>
    );
}

export default App;
