// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes("Fire"));
  }
  
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (pokemons.length === 0) return null;
    const shortest = pokemons.reduce((shortest, current) => {
      const shortestHeight = parseFloat(shortest.height);
      const currentHeight = parseFloat(current.height);
      return currentHeight < shortestHeight ? current : shortest;
    });
    return shortest.name;
  }
  
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    const totalCandies = pokemons.reduce((sum, pokemon) => {
      return pokemon.candy_count ? sum + pokemon.candy_count : sum;
    }, 0);
    const count = pokemons.filter(pokemon => pokemon.candy_count).length;
    return count === 0 ? 0 : parseFloat((totalCandies / count).toFixed(2));
  }
  
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    const groundPokemons = pokemons.filter(pokemon => pokemon.type.includes("Ground"));
    return groundPokemons.slice(0, 10).map(pokemon => pokemon.img);
  }
  
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    const pikachuWeight = parseFloat(
      pokemons.find(pokemon => pokemon.name === "Pikachu").weight
    );
    return pokemons
      .filter(pokemon => parseFloat(pokemon.weight) > pikachuWeight)
      .map(pokemon => pokemon.name);
  }
  
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    return pokemons
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 20)
      .map(pokemon => pokemon.name);
  }
  
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
    return pokemons
      .filter(pokemon => pokemon.weaknesses.length === 1)
      .slice(0, 15)
      .map(pokemon => pokemon.name);
  }
  