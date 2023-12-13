const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
    const { id, name, types, sprites } = pokeDetail;

    return new Pokemon(
        id,
        name,
        types.map((typeSlot) => typeSlot.type.name),
        sprites.other['official-artwork'].front_default,
    );
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon);
}

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails);
}
