let arrayPokemons;
function getPokemon(){
    //fetch cham uma API
    fetch("https://pokeapi.co/api/v2/pokemon/",
        {
            method: "GET"
        }
    )
    .then ((response) => response.json())
    .then ((data) => {
        arrayPokemons = data.results;
        appendData(arrayPokemons);
    }
    )
    .catch((error) =>{
        console.error ("erro", error);
    }
    ) 
}
function appendData (pokemons){
    let place = document.querySelector("#data-output");
    let output = "";

    for(let pokemon of pokemons){
        output += `
        <tr>
        <td>${pokemon.name}</td>
        <td>${pokemon.url}</td>
        </td>
        `
    }
    place.innerHTML = output;
}
getPokemon();