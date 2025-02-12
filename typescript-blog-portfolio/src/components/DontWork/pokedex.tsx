"use client";
import { PokemonClient } from "pokenode-ts";
import Image from "next/legacy/image";
const PokedexComponent = async ({ pokemonName }: { pokemonName: string }) => {
  const api = new PokemonClient();
  const getPokemonData = async () => {
    try {
      const pokemonData = await api.getPokemonByName(pokemonName);
      const pokemonInfo = {
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types,
        number: pokemonData.id,
        sprite: pokemonData.sprites.front_default,
      };
      return pokemonInfo;
    } catch (error) {
      console.error(error);
    }
  };
  const pokemonStats = await getPokemonData();

  return (
    <div>
      <h2>Name: {pokemonStats?.name}</h2>
      <h2>Height: {pokemonStats?.height}</h2>
      <h2>Weight: {pokemonStats?.weight}</h2>
      <h2>Number: {pokemonStats?.number}</h2>
      <h2>
        Type(s): {pokemonStats?.types.map((type) => `${type.type.name} `)}
      </h2>
      {pokemonStats && pokemonStats.sprite ? (
        <Image
          src={`${pokemonStats.sprite}`}
          alt={`${pokemonStats.name} sprite`}
          width={200}
          height={200}
        />
      ) : (
        <h2>No image available</h2>
      )}
    </div>
  );
};

export default PokedexComponent;
