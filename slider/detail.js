import products from "./index.js"

const items = document.getElementById("items")
let id = window.location.href.split("=")[1]
let target = products.find(item => item.id == id)

let newImage = document.createElement("img")
newImage.setAttribute("src", target.image)
items.append(newImage)