const modalBtn = document.getElementById("modal-btn")
const modal = document.getElementById("modal")

modalBtn.addEventListener("click", (e) => {
    if (modal.classList.contains("active")) {
        modal.classList.remove("active")
    }
    else {
        modal.classList.add("active")
    }
})