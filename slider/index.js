let id = 5
const addNewSlide = document.getElementById("addNewSlide")
let slides = [
    {
        id: 1,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956",
        isActive: true
    },
    {
        id: 2,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1971870/capsule_616x353.jpg?t=1709136014",
        isActive: false
    },
    {
        id: 3,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631",
        isActive: false
    },
    {
        id: 4,
        image: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/152432-games-feature-what-is-valorant-a-guide-to-the-free-to-play-fps-with-tips-on-how-to-win-image3-muha6tfgev.jpg",
        isActive: false
    },
]
function nextSlide(id) {
    const target = slides.find((slide) => slide.id == id)
    const indexOfTarget = slides.indexOf(target)
    if (indexOfTarget == slides.length - 1) {
        slides[indexOfTarget].isActive = false
        slides[0].isActive = true
    }
    else {
        slides[indexOfTarget].isActive = false
        slides[indexOfTarget + 1].isActive = true
    }
    renderSlider(slides)
}
function prevSlide(id) {
    const target = slides.find((slide) => slide.id == id)
    const indexOfTarget = slides.indexOf(target)
    if (indexOfTarget == 0) {
        slides[indexOfTarget].isActive = false
        slides[slides.length - 1].isActive = true
    }
    else {
        slides[indexOfTarget].isActive = false
        slides[indexOfTarget - 1].isActive = true
    }
    renderSlider(slides)
}
const wrapper = document.getElementById("wrapper")
function renderSlider(list) {
    let inner = ""
    for (let i = 0; i < list.length; i++) {
        if (list[i].isActive) {
            inner = `
            <button id="prev" onclick="prevSlide(${list[i].id})">prev</button>
            <div id="screen">
              <img
                src="${list[i].isActive ? `${list[i].image}` : ""}"
                alt=""
              />
            </div>
            <button id="next" onclick="nextSlide(${list[i].id})">next</button>
            `
        }
    }
    wrapper.innerHTML = inner
}

addNewSlide.addEventListener("click", (e) => {
    let newImage = prompt("image")
    let newSlide = {
        id: id,
        image: newImage,
        isActive: false
    }
    slides.push(newSlide)
    id++
    renderSlider(slides)
})
renderSlider(slides)
