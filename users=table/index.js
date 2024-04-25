const nameInp = document.getElementById("name")
const surnameInp = document.getElementById("surname")
const ageInp = document.getElementById("age")
const positionInp = document.getElementById("position")
const listItem = document.getElementById("list")
const searchInp = document.getElementById("search")
const addForm = document.getElementById("add-form")
let users = []
let id = 0
class User {
    constructor(name, surname, age, position) {
        this.id = id
        this.name = name
        this.surname = surname
        this.age = age
        this.position = position
        id++
    }
}
addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addUser()

})
searchInp.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    searchUser(e.target.value)
})
function searchUser(string) {
    renderUI(users.filter(user => user.name.toLowerCase().trim().includes(string.toLowerCase().trim())))
}
function getDataFromUser() {
    let nameVal = nameInp.value
    let surnameVal = surnameInp.value
    let ageVal = ageInp.value
    let positionVal = positionInp.value
    return { nameVal, surnameVal, ageVal, positionVal }
}

function addUser() {
    const { nameVal, surnameVal, ageVal, positionVal } = getDataFromUser()
    let newUser = new User(nameVal, surnameVal, ageVal, positionVal)
    users.push(newUser)
    renderUI(users)
    resetForm()
}

function deleteUser(id) {
    const target = users.find((user) => user.id == id)
    const indexOfTarget = users.indexOf(target)
    users.splice(indexOfTarget, 1)
    renderUI(users)
}
function renderUI(list) {
    let text = ""
    for (let i = 0; i < list.length; i++) {
        text += `
        <tr>
        <th scope="row">${list[i].id}</th>
        <td>${list[i].name}</td>
        <td>${list[i].surname}</td>
        <td>${list[i].age}</td>
        <td>${list[i].position}</td>
        <td><button class="btn btn-info" onclick="editUser(${list[i].id})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteUser(${list[i].id})">delete</button></td>
      </tr>
        `
    }
    listItem.innerHTML = text

}
function resetForm() {
    nameInp.value = ""
    surnameInp.value = ""
    ageInp.value = ""
    positionInp.value = ""
}
function editUser(id) {
    const target = users.find((user) => user.id == id)
    let newName = prompt("name")
    let surname = prompt("surname")
    target.name = newName
    target.surname = surname
    renderUI(users)
}