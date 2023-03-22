
const nav = document.getElementById("nav");
const content = document.getElementById("card");

let pageIndex = 0;
let itemsPerPage = 4;


function loadItems(){
 
    content.innerHTML = "";
    for (let i = pageIndex * itemsPerPage; i <(pageIndex * itemsPerPage) + itemsPerPage; i++) {
       const nam = data.eventos[i].name;
       const img = data.eventos[i].image;
       const desc = data.eventos[i].description;
       const price = data.eventos[i].price;

       if( !data.eventos [i]) {
        const item = document.createElement ("div");
        item.className = "rangoC";
        item.innerHTML+= `
        
        <div class="col-lg-3 col-sm-6">
                <div class="card p-3">
                    <img src="assets/images/Cine7.jpg" class="card-img-top shadow-lg bg-body-tertiary rounded"
                        alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Title</h5>
                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br>
                        <div class="d-flex justify-content-between">
                            <p class="card-text"><small class="text-muted">Price $200</small></p>
                            <a href="pages/details.html" class="btn btn-primary float-right">View details</a>
                        </div>
                    </div>
                </div>
            </div> `;

       }
       
    }
}





























<div class="col-lg-3 col-sm-6">
                <div class="card p-3">
                    <img src="assets/images/Cine7.jpg" class="card-img-top shadow-lg bg-body-tertiary rounded"
                        alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Title</h5>
                        <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br>
                        <div class="d-flex justify-content-between">
                            <p class="card-text"><small class="text-muted">Price $200</small></p>
                            <a href="pages/details.html" class="btn btn-primary float-right">View details</a>
                        </div>
                    </div>
                </div>
            </div>

