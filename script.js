let arrayCards;
function getData(){
    fetch("https://rickandmortyapi.com/api/character/?page=19",
        {
            method: "GET"
        }
    ).then((response) => response.json())
    .then((data) => {
        arrayCards = data.results;
        appendData(arrayCards);
    }
    )
    .catch((error) =>{
        console.error ("erro", error);
    })
}

function appendData(cards){
    let place = document.querySelector("#flex-container");
    let retrievedData = "";
    
    for(let card of cards){
        
        retrievedData += `
        <div class="card">
        <div class="card-img">
        <img src= ${card.image}>
        </div>
        <div class="card-content">
        <h3>Nome: ${card.name}</h3>
        <p> Status: ${card.status}</p>
        <p> Espécie: ${card.species}</p>
        <p> Tipo: ${card.type}</p>
        <p> Origem: ${card.origin.name}</p>
        <p> Localização Atual: ${card.location.name}</p>
        </div>
        </div>
        `
    }
    place.innerHTML = retrievedData;
}

getData();