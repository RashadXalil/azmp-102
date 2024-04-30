const listItem = document.getElementById("list")
const addBtn = document.getElementById("addBtn")
const wishlistBody = document.getElementById("wishlistBody")
let games;
let wishlistItems;
let id;
if (localStorage.getItem("id")) {
    id = parseInt(localStorage.getItem("id"))
} else {
    id = 0
    localStorage.setItem("id", 0)
}
if (localStorage.getItem("games")) {
    games = JSON.parse(localStorage.getItem("games"))
} else {
    games = []
    localStorage.setItem("games", JSON.stringify(games))
}
if (localStorage.getItem("wishlistItems")) {
    wishlistItems = JSON.parse(localStorage.getItem("wishlistItems"))
} else {
    wishlistItems = []
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
}
class Game {
    constructor(name, company, image, price) {
        this.id = id
        this.name = name
        this.company = company
        this.image = image
        this.price = price
        id++
        localStorage.setItem("id", id)
    }
}
function addGame(name, company, image, price) {
    let newGame = new Game(name, company, image, price)
    games.push(newGame)
    localStorage.setItem("games", JSON.stringify(games))
    renderUI(games)
}
function deleteGame(id) {
    const target = games.find(game => game.id == id)
    const indexOfTarget = games.indexOf(target)
    games.splice(indexOfTarget, 1)
    localStorage.setItem("games", JSON.stringify(games))
    renderUI(games)
}
function addToWishlist(id) {
    const target = games.find(game => game.id == id)
    wishlistItems.push(target)
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
    renderWishlist(wishlistItems)
}
function deleteItemFromWishlist(id) {
    const target = wishlistItems.find(game => game.id == id)
    const indexOfTarget = wishlistItems.indexOf(target)
    wishlistItems.splice(indexOfTarget, 1)
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems))
    renderWishlist(wishlistItems)
}
function renderWishlist(list) {
    let innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        innerHTML += `
        <tr>
        <th scope="row">${i}</th>
        <td><img width="50px" heigth="50px" src="${list[i].image}"/></td>
        <td>${list[i].name.slice(0, 10)}...</td>
        <td>${list[i].price}</td>
        <td><button class="btn btn-danger" onclick="deleteItemFromWishlist(${list[i].id})">Delete</button></td>
      </tr>
        `
    }
    wishlistBody.innerHTML = innerHTML
}
const renderUI = (list) => {
    let innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        innerHTML += `
        <div class="col-3 mb-5 mt-5">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" height="300px" src="${list[i].image}" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${list[i].name}</h5>
            <p class="card-text">
            ${list[i].company}
            ${list[i].price}AZN
            </p>
            <button class="btn btn-warning" onclick="addToWishlist(${list[i].id})">Add to Wishlist</button>
            <button class="btn btn-danger" onclick="deleteGame(${list[i].id})">Delete</button>
          </div>
        </div>
      </div>
        `
    }
    listItem.innerHTML = innerHTML
}
renderUI(games)
renderWishlist(wishlistItems)
addBtn.addEventListener("click", (e) => {
    let name = prompt("name")
    let company = prompt("company")
    let image = prompt("image")
    let price = prompt("price")
    addGame(name, company, image, price)
})
