// get meal list that matches with the ingredients
const input = document.getElementById("search");
input.addEventListener("input", () => {
    const cards = document.getElementsByClassName("card");
    let filter = input.value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");
        if (title.innerText.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
})


let heading = document.getElementById("heading");
function getMealList() {
    let url = "https://restcountries.com/v3.1/all"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = "";
            for (i in data) {
                html += `
                          <div class="col-lg-4 col-md-6 d-flex justify-content-center d-sm-flex justify-content-sm-center my-2 goat">
                                <div class="card" style="width: 18rem;">
                                   <img src=${data[i].flags.png} class="card-img-top" alt="...">                                    
                                   <div class="card-body">
                                       <h5 class="card-title">${data[i].name.common}</h5>
                                       <button class="btn btn-success" onclick="more(${data[i].population})">More Details</button>
                                   </div>
                               </div>
                               </div>`;
            }


            heading.innerHTML = html;
        }).catch(error => console.log(error));


}
getMealList();

function more(population) {
    let toggle = true;
    if (toggle) {
        let cardBody = document.querySelectorAll(".card-body");
        // cardBody.forEach((element, index) => {
        //     let html = "";
        //     html += `<ul class="list-group list-group-flush">
        //     <li class="list-group-item">An item</li>
        //     <li class="list-group-item">A second item</li>
        //     <li class="list-group-item">A third item</li>
        //     </ul>
        //     `;
        //     element[index].innerHTML = html
        //     // cardBody[index].innerHTML = html;
        // })
        for (let i = 0; i <= cardBody.length; i++) {
            let html = "";
            html += `<ul class="list-group list-group-flush">
                <li class="list-group-item">${population}</li>
                <li class="list-group-item">${population}</li>
                <li class="list-group-item">${population}</li>
                </ul>`;
            cardBody[i].innerHTML = html;
        }

    }
}


// function getMealList() {
//     let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             let html = "";
//             if (data.categories) {
//                 data.categories.forEach(category => {
//                     html += `
//                             <div class="col-lg-4 col-md-6 d-flex justify-content-center d-sm-flex justify-content-sm-center my-2 goat">
//                                 <div class="card" style="width: 18rem;" data-id="${category.idCategory}">
//                                     <img src="${category.strCategoryThumb}" class="card-img-top" alt="...">
//                                     <div class="card-body">
//                                         <h5 class="card-title">${category.strCategory}</h5>
//                                         <button class="btn btn-success">See Recipe</button>
//                                     </div>
//                                 </div>
//                             </div>

//                             `;
//                 });
//             }

//             heading.innerHTML = html;
//         }).catch(error => console.log(error));


// }



