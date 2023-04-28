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

                    let indexNumber = data.indexOf(data[i]);

                    
                    html += `
                            <div class="col-lg-4 col-md-6 d-flex justify-content-center d-sm-flex justify-content-sm-center my-2 goat">
                                    <div class="card" style="width: 18rem;">
                                    <img src=${data[i].flags.png} class="card-img-top" alt="..."> 
                                    <h5 class="card-title">${data[i].name.common}</h5>                                   
                                    <div class="card-body">
                                    <button class="btn btn-success" onclick="more(${data[i].population}, ${data[i].area}, '${data[i].capital}',${indexNumber})">More Details</button>
                                    </div>
                                </div>
                                </div>`;



                }


                heading.innerHTML = html;
            }).catch(error => console.log(error));


    }


        // function getButton(field, indexNumber) {
        //     return `
            
        //     <button class="btn btn-success" onclick="more(${field}, ${field.population}, ${field.area}, '${field.capital}',${indexNumber})">More Details</button>`;
        // }


    getCountries();

    function more(population, area, capital, elementIndex) {
        let toggle = true;
        if (toggle) {
            let cardBody = document.querySelectorAll(".card-body");
            console.log(cardBody[elementIndex]);

            let html = "";
            html += `<ul class="list-group list-group-flush">
                        <li class="list-group-item">Population: ${population}</li>
                        <li class="list-group-item">Area: ${area} sq.km</li>
                        <li class="list-group-item">Capital: ${capital}</li>
                    </ul>`;

            cardBody[elementIndex].innerHTML = html;
            toggle = false;

        } 
        
        // else {
        //     let html = `<button class="btn btn-success" onclick="more(${population}, ${area}, '${capital}',${elementIndex})">More Details</button>`
        //     cardBody[elementIndex].innerHTML = html;
        // }
    }



