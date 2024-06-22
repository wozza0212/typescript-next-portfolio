import { BaseLayout } from "@/components";
import { PokemonClient } from "pokenode-ts";
const Pokedex = async () => {
  const api = new PokemonClient();
  const getPokemonName = async () => {
    try {
      const pokemonData = await api.getPokemonByName("pikachu");
      return pokemonData.name;
    } catch (error) {
      console.error(error);
    }
  };
  const getPokemonData = async () => {
    try {
      const pokemonData = await api.getPokemonByName("mew");
      const pokemonStats = {
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types,
        number: pokemonData.id,
      };
      return pokemonStats;
    } catch (error) {
      console.error(error);
    }
  };
  const pikachuStats = await getPokemonData();
  console.log(pikachuStats?.types)
  pikachuStats?.types.map((type) => console.log(type.type.name));
  
  return (
    <BaseLayout>
      <div>
        <h1>Pokedex</h1>
        <h2>Name: {pikachuStats?.name}</h2>
        <h2>Height: {pikachuStats?.height}</h2>
        <h2>Weight: {pikachuStats?.weight}</h2>
        <h2>Number: {pikachuStats?.number}</h2>
        <h2>Type(s): {pikachuStats?.types.map((type) => `${type.type.name} `)}</h2>
      </div>
    </BaseLayout>
  );
};

export default Pokedex;
