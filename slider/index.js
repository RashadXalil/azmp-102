const products = [
    {
        id: 0,
        brand: "Mercedes",
        model: "C200",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXoIurwvRvTMVFBDNK2E_0pKrt27MT-2RplZk81VnPw&s",
        desc: "lorems"
    },
    {
        id: 2,
        brand: "BMW",
        model: "X7",
        image: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-x7-101-65d51e47938f4.jpg?crop=0.732xw:0.822xh;0.122xw,0.178xh&resize=768:*",
        desc: "ipsum"
    },
    {
        id: 3,
        brand: "VAZ",
        model: "2107",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0sIu3yFt1Fn8cABaTwt8H8OawfuZrPzgRWt9J3g4vQ&s",
        desc: "sit amet"
    }
]
const listItem = document.getElementById("list")
function renderUI(list) {
    let inner = '';
    for (let i = 0; i < list.length; i++) {
        inner += `
        <div class="col-3">
          <div class="card" style="width: 18rem">
            <img class="card-img-top" src="${list[i].image}" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">${list[i].brand} ${list[i].model}</h5>
              <p class="card-text">
               ${list[i].desc}
              </p>
              <a href="detail.html?id=${list[i].id}" class="btn btn-primary">detail</a>
            </div>
          </div>
        </div>
        `
    }
    listItem.innerHTML = inner
}
if (window.location.href == "http://127.0.0.1:5500/index.html") {
    renderUI(products)
}

export default products