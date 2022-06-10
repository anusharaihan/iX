
async function fetchData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch (url, {
        method: "GET", 
         headers: {
            "Content-Type": "applications/json"
         }
    });

    if (result.status >= 200 && result.status<300) {
        const json = await result.json();
        return json;
    }
    else {
        throw new Error("Error");
    }
}

function renderPokemon(pokemon) {
    nameCard = document.getElementById('name');
    heightCard = document.getElementById('height');
    weightCard = document.getElementById('weight');
    abilitiesCard = document.getElementById('abilities');

    nameCard.innerHTML = pokemon.name;
    heightCard.innerHTML = pokemon.height;
    weightCard.innerHTML = pokemon.weight;

    let abilitiesOutput = '<ul>';
    for (let i = 0; i<pokemon.abilities.length; i++)
        abilitiesOutput+= `<li> 
        ${pokemon.abilities[i].ability.name}
        </li>`;
        abilitiesOutput += '</ul>'
    abilitiesCard.innerHTML = abilitiesOutput;

}

button = document.getElementById('generateButton');
button.addEventListener('click', (event) => {
    event.preventDefault();
    start();
});

async function start() {
    try {
        randomNum = Math.floor(Math.random() * 898);
        const pokemon = await fetchData(randomNum);
        renderPokemon(pokemon);
    }
    catch(err) {
        console.log(err);
    }
}
