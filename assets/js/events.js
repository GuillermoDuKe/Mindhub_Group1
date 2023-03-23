
const nav = document.getElementById("nav");
const content = document.getElementById("card");
let allEvents = data.eventos;
let pageIndex = 0;
let itemsPerPage = 4;

loadItems();

function loadItems() {

    content.innerHTML = "";
    for (let i = pageIndex * itemsPerPage; i < (pageIndex * itemsPerPage) + itemsPerPage; i++) {

        const name = allEvents[i].name;
        const img = allEvents[i].image;
        const desc = allEvents[i].description;
        const price = allEvents[i].price;
        const categ = data.eventos[i].category;
        const dat = data.eventos[i].date;
        const pla = data.eventos[i].place;
        const capa = data.eventos[i].capacity;
        const assis = data.eventos[i].assistance;        

        if (!allEvents[i]) { break }
        
        content.innerHTML += `

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
                            <a href="pages/details.html?nombre=${name}&descripcion=${desc}&imagen=${img}&precio=${price}&category=${categ}&date=${dat}&place=${pla}&capacity=${capa}&assistance=${assis}" class="btn btn-primary float-right">View details</a>
                        </div>
                    </div>
                </div>
            </div> `;

        
    }
    loadPageNav();
}



function loadPageNav(){
nav.innerHTML="";
for (let i=0 ; i<(allEvents.length/itemsPerPage); i++){
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






















