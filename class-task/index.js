// class Vehicle {
//     constructor(color, year) {
//         this.color = color
//         this.year = year
//     }
// }
// class Car extends Vehicle {
//     constructor(color, year, brand, model, fuelCapacity, fuelFor1Km, currentFuel, km) {
//         super(color, year)
//         this.brand = brand
//         this.model = model
//         this.fuelCapacity = fuelCapacity
//         this.fuelFor1Km = fuelFor1Km
//         this.currentFuel = currentFuel
//         this.km = km
//     }
//     showInfo = function () {
//         return `brand:${this.brand} \nmodel:${this.model} \nyear:${this.year} \ncolor:${this.color} \nkm:${this.km} \nCurrentFuel:${this.currentFuel}`
//     }
//     drive = function (distance) {
//         if (distance * this.fuelFor1Km < this.currentFuel) {
//             this.km += distance
//             this.currentFuel -= distance * this.fuelFor1Km
//             return `mesafe qeth edildi.\nProbeq:${this.km} km \nHal-hazirdaki yanacag:${this.currentFuel} L`
//         } else {
//             return `bakda yeteri qeder yanacag yoxdur`
//         }
//     }
//     addFuel = function (l) {
//         if (l + this.currentFuel > this.fuelCapacity) {
//             return `bu qeder benzin alina bilmez`
//         }
//         else {
//             this.currentFuel += l
//             return `Baka elave olunan benzin miqdarı ${l} L\nBakda olan hal-hazirdaki benzin:${this.currentFuel}L`
//         }
//     }
//     changeMusic = function (musicName) {
//         return `Yutubdan qoshdum \nmahnı : ${musicName}`
//     }
// }

// const m3 = new Car("blue", 2015, "BMW", "M3", 60, 0.2, 45, 25000)

// console.log(m3.showInfo())
// console.log(m3.changeMusic("Muzikalni Meyxana"))
// console.log(m3.drive(200))
// console.log(m3.showInfo())
// console.log(m3.addFuel(55))


// class Product {
//     constructor(name, price, count) {
//         this.name = name
//         this.price = price
//         this.count = count
//         this.totalIncome = 0
//     }
//     sell = function (quantity = 1) {
//         if (this.count >= quantity) {
//             this.totalIncome += this.price * quantity
//             this.count -= quantity
//             return `${quantity} eded ${this.name} satildi.\nToplam gelir : ${this.totalIncome} manat \nQalan mehsul:${this.count} eded `
//         }
//         else {
//             return `qağa mal yoxdu anbarda`
//         }
//     }
// }
// class Milk extends Product {
//     constructor(name, price, count, volume, fatRate) {
//         super(name, price, count)
//         this.volume = volume
//         this.fatRate = fatRate
//     }
// }

// const milk1 = new Milk("Palsud", 1.5, 100, 1, 3.2)

// console.log(milk1.sell(100))