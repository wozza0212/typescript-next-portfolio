import { BaseLayout } from "@/components";
import PokeAPI from "pokeapi-typescript";
import { useEffect, useState } from "react";
const PokedexComp = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState<{
      id: number;
      name: string;
      height: number;
      weight: number;
      types: string[]; // Update the type to string[]
      sprite: string;
  }>({
      id: 0,
      name: "",
      height: 0,
      weight: 0,
      types: [],
      sprite: "",
  });
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    PokeAPI.Pokemon.resolve(pokemon).then((result) => {
        const newPokemonData = {
            id : result.id,
            name : result.name,
            height : result.height,
            weight : result.weight,
            types : result.types.map((type) => type.type.name),
            sprite : result.sprites.front_default
        }
        console.log(pokemonData);
        setPokemonData(newPokemonData); 
    });
  }, []);
  return (
    <div>
      <h1>Pokedex</h1>
      <h2>ID: {pokemonData.id}</h2>
    </div>
  );
};

export default PokedexComp;
