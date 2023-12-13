const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    const { type, number, name, types, image } = pokemon;
    return `<li class="pokemon ${type}">
        <span class="number">#${number}</span>
        <span class="name">${name}</span>

        <div class="detail">
            <ol class="types">
                ${types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <img src="${image}" alt="${name}">
        </div>
    </li>`;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit);
})