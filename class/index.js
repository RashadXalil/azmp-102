// class User {
//     constructor(name, surname, age, username, password, email) {
//         this.name = name
//         this.surname = surname
//         this.age = age
//         this.username = username
//         this.password = password
//         this.email = email
//     }
// }

// let users = []

// const newUser = new User("Nicat", "Huseynov", 21, "yaz__divara__colkali__avara", "khamzeli__khizz", "cr7messiremisteryo@hotmail.com")
// const newUser2 = new User("Nicat", "Huseynov", 21, "yaz__divara__colkali__avara", "khamzeli__khizz", "cr7messiremisteryo@hotmail.com")
// users.push(newUser)
// users.push(newUser2)
// console.log(users)


// class Human {
//     constructor(name, surname, age) {
//         this.name = name
//         this.surname = surname
//         this.age = age
//     }
//     getFullName = function () {
//         return `${this.name} ${this.surname}`
//     }
//     getBirthday = function () {
//         return 2024 - this.age
//     }
//     getFullData = function () {
//         return `${this.name} ${this.surname} ${this.age}`
//     }
// }
// class Teacher extends Human {
//     constructor(name, surname, age, experince, salary) {
//         super(name, surname, age)
//         this.experince = experince
//         this.salary = salary
//     }


// }
// class Student extends Human {
//     constructor(name, surname, age, stip, group) {
//         super(name, surname, age)
//         this.stip = stip
//         this.group = group
//     }
// }

// const human1 = new Human("Eli", "Eliyev", 15)
// const teacher1 = new Teacher("Rashad", "Xalilov", 24, 5, 170)
// const Student1 = new Student("Eli", "Celilov", 19, "kasifdi", "AZMP101")

// console.table(human1.getFullData())
// console.table(teacher1.getBirthday())
// console.table(Student1.getBirthday())





// let id = 0

// class Base {
//     constructor(createdAt, modifiedAt) {
//         this.id = id
//         this.createdAt = createdAt
//         this.modifiedAt = modifiedAt
//         this.isDeleted = false
//         id++
//     }
//     deleteItem = function () {
//         this.isDeleted = true
//     }
// }

// class Brand extends Base {
//     constructor(name, createdAt, modifiedAt) {
//         super(createdAt, modifiedAt)
//         this.name = name
//     }
//     getItems = function () {
//         return products.filter(x => x.brand == this.name)
//     }
// }
// class Product extends Base {
//     constructor(name, brand, category, costPrice, salePrice, discountPercent, createdAt, modifiedAt) {
//         super(createdAt, modifiedAt)
//         this.name = name
//         this.brand = brand
//         this.category = category
//         this.costPrice = costPrice
//         this.discountPercent = discountPercent
//         this.salePrice = salePrice
//     }
// }
// Product.prototype.totalIncome = function () {
//     return `bir ${this.brand} ${this.name}-dan olan qazanc : ${this.salePrice - this.costPrice} Dirhem`
// }
// const product5 = new Product("Redmi Note 8 Pro Max Ultra Mega Giga", "Xiaomi", "Smartphone", 10, 1300, 0, "02-01-2022", "04-01-2022")
// const product7 = new Product("33-10", "Nokia", "Phone", 500, 900, 0, "01-01-2022", "03-01-2022")
// const product1 = new Product("13 Pro Max", "Apple", "Smartphone", 900, 1300, 10, "01-01-2022", "03-01-2022")
// console.log(product1.totalIncome())
// console.log(product5.totalIncome())
// console.log(product7.totalIncome())
// const product2 = new Product("12 Pro Max", "Apple", "Smartphone", 700, 1200, 30, "01-01-2022", "03-01-2022")
// const product3 = new Product("11 Pro Max", "Apple", "Smartphone", 600, 1100, 20, "01-01-2022", "03-01-2022")
// const product4 = new Product("XS Pro Max", "Apple", "Smartphone", 600, 1100, 20, "01-01-2022", "03-01-2022")
// const product6 = new Product("S23", "Zamzung", "Smartphone", 900, 1300, 0, "01-02-2022", "03-01-2022")
// const product8 = new Product("Note 13", "Xiaomi", "Smartphone", 400, 1200, 0, "01-01-2022", "03-01-2022")
// const product9 = new Product("Poco M3", "Xiaomi", "Smartphone", 200, 1100, 0, "01-01-2022", "03-01-2022")
// const brand1 = new Brand("Apple", "13-12-2021", "11-12-2022")
// const products = [product1, product2, product3, product4, product5, product6, product7, product8, product9]




// const items = [1, 2, 3, 54, 342, 23, 123, 21]

// function getMinimum(array) {
//     let min = items[0]
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] < min) {
//             min = array[index]
//         }

//     }
//     return min
// }

// Array.prototype.customProtoGetMin = function () {
//     let min = items[0]
//     for (let index = 0; index < this.length; index++) {
//         if (this[index] < min) {
//             min = this[index]
//         }

//     }
//     return min
// }
// String.prototype.capitalizeString = function () {
//     let result = ""
//     for (let i = 0; i < this.length; i++) {
//         if (i == 0) {
//             result += this[i].toUpperCase()
//         }
//         else {
//             result += this[i].toLowerCase()
//         }
//     }
//     return result
// }

// let salam = "sjjflAAdslsdnAkdsPOHdsa"

// console.log(getMinimum(items))
// console.log(items.customProtoGetMin())
// console.log(salam.capitalizeString())

let id = 0
class Base {
    constructor(createdAt, modifiedAt) {
        this.id = id
        this.createdAt = createdAt
        id++
    }
}

class Animal extends Base {
    constructor(gender, name, age, isWild, type, createdAt) {
        super(createdAt)
        this.name = name
        this.gender = gender
        this.age = age
        this.isWild = isWild
        this.type = type
    }
}












Animal.prototype.getFullInfo = function () {
    return `${this.name} ${this.gender} ${this.type}`
}


let animal1 = new Animal("male", "Lion", 2, true, "Cat", "11-12-2023")
console.log(animal1.getFullInfo())



function salam() {
    let a = 12; // 1
    let b = 13 // 1 
    let c = a + b // 1 
    return c // 1
}

// function getMax(array) {
//     let max = 0 // 1
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i]
//         }
//     } // 2n 
//     return max // 1
// }


function rafael(array) {

    let reverse = [] // 1

    for (let i = array.length; i >= 0; i--) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] % 2 == 0) {
                reverse.push(array[i] + 1)
            }
            reverse.push(array[i])
        }
    }
    return reverse

}
// [1,2,3] => 2n+2 => 8
// => 2n+2

// => 4