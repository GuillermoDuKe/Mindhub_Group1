let eventosPasados = data.eventos.filter((e)=>e.date<data.fechaActual);
console.log(eventosPasados);

const nav = document.getElementById("nav");
const content = document.getElementById("card");

let pageIndex = 0;
let itemsPerPage = 4;

loadItems();

function loadItems() {

    content.innerHTML = "";
    for (let i = pageIndex * itemsPerPage; i < (pageIndex * itemsPerPage) + itemsPerPage; i++) {
        const name = eventosFuturos[i].name;
        const img = eventosFuturos[i].image;
        const desc = eventosFuturos[i].description;
        const price = eventosFuturos[i].price;

        if (!eventosFuturos[i]) { break }
        const item = document.createElement("div");
        item.className = "rangoC";
        item.innerHTML += `

        <div class="col-lg-3 col-sm-6">
                <div class="card p-3">
                    <img src="${img}" class="card-img-top shadow-lg bg-body-tertiary rounded"
                        alt="${name}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${name}</h5>
                        <p class="card-text text-center">${desc}</p>
                        <br>
                        <div class="d-flex justify-content-between">
                            <p class="card-text"><small class="text-muted">Price $ ${price}</small></p>
                            <a href="pages/details.html" class="btn btn-primary float-right">View details</a>
                        </div>
                    </div>
                </div>
            </div> `;

        content.appendChild(item);
    }
    loadPageNav();
}



function loadPageNav(){
nav.innerHTML="";
for (let i=0 ; i<(eventosFuturos.length/itemsPerPage); i++){
    const span= document.createElement("button");
    span.innerHTML=i+1;
    span.addEventListener("click", (e)=>{
        pageIndex= e.target.innerHTML-1;
        loadItems();
    });
    if (i===pageIndex){
        span.style.backgroundColor="black";
        span.style.color="white";
    }
    nav.append(span);
}
}