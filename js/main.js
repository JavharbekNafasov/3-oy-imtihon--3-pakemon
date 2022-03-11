// 3-MISOL

var elList = document.querySelector("#pakimon_list")

var newPokemonsList = pokemons.slice(0, 48)

function renderPokemons(array, place) {
    elList.innerHTML = null

    for (var item of array) {
        // create elment <li>
        var newLi = document.createElement("li")
        newLi.classList.add("col-3", "mb-2", "p-2")

        // create elment <div>
        var newDiv = document.createElement("div")
        newDiv.classList.add("class", "card")

        // create elment <img>
        var newImg = document.createElement("img")

        newImg.setAttribute("src", `http://www.serebii.net/pokemongo/pokemon/${item.num}.png`)
        newImg.setAttribute("class", "card-img-top p-4")
        newImg.setAttribute("alt", "pakemons")

        // create elment <div>
        var newInnerDiv = document.createElement("div")
        newInnerDiv.classList.add("card-body", "text-center")

        // create elment <h3>
        var newHeading = document.createElement("h3")
        newHeading.classList.add("card-title")
        newHeading.textContent = item.name

        // create elment <p>
        var newP = document.createElement("p")
        newP.setAttribute("class", "card-text fs-6")
        newP.textContent = item.type

        // create elment <p>
        var newP2 = document.createElement("p")
        newP2.setAttribute("class", "card-text fs-6")
        newP2.textContent = item.weight

        // create elment <p>
        var newP3 = document.createElement("p")
        newP3.setAttribute("class", "card-text fs-6")
        newP3.textContent = item.height

        newInnerDiv.appendChild(newHeading);
        newInnerDiv.appendChild(newP);
        newInnerDiv.appendChild(newP2);
        newInnerDiv.appendChild(newP3);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newInnerDiv);
        newLi.appendChild(newDiv);
        place.appendChild(newLi);
    }
}

renderPokemons(newPokemonsList, elList)
