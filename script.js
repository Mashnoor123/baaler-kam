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
function getCountries() {
    let url = "https://restcountries.com/v3.1/all"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = "";
            for (i in data) {

                let indexNumber = data.indexOf(data[i]); // tor ei index number lagbe eta chara bujhbe na tor more() function je kon card r details dekhaite hobe, indexNumber ta jodi na bujhos eta console.log kore dekhe nite paros

                let seeMoreDetails = {
                    index: indexNumber,
                    population: data[i].population,
                    capital: data[i].capital
                } // ei object ta pass kore dis more() function e, better hobe than inputing multiple varibales as parameters

                html += `
                          <div class="col-lg-4 col-md-6 d-flex justify-content-center d-sm-flex justify-content-sm-center my-2 goat">
                                <div class="card" style="width: 18rem;">
                                   <img src=${data[i].flags.png} class="card-img-top" alt="...">                                    
                                   <div class="card-body">
                                       <h5 class="card-title">${data[i].name.common}</h5>
                                       <button class="btn btn-success" onclick="more(${data[i].population}, ${data[i].continents}, ${indexNumber})">More Details</button>
                                   </div>
                               </div>
                               </div>`;
            }


            heading.innerHTML = html;
        }).catch(error => console.log(error));


}


getCountries();

function more(population, continents, elementIndex) {
    let toggle = true;
    if (toggle) {
        let cardBody = document.querySelectorAll(".card-body");
        console.log(cardBody[elementIndex]);

        let html = "";
        html += `<ul class="list-group list-group-flush">
                    <li class="list-group-item">Population: ${population}</li>
                    <li class="list-group-item">Currency: ${continents}</li>
                    </ul>`;

        cardBody[elementIndex].innerHTML = html;
        toggle = false;

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
