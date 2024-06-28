"use Client";
import { BaseLayout, FormButton } from "@/components";
import PokeAPI from "pokeapi-typescript";
import Image from "next/image";
import { useEffect, useState, FormEvent } from "react";

type PokemonData = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[]; // Update the type to string[]
  sprite: string;
};

const PikachuStats = {
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  types: ["electric"],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
};

const PokedexComp = () => {
  const unusedButton =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState<PokemonData>(PikachuStats);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
    const pokemonNew = await PokeAPI.Pokemon.resolve(pokemon).then((result) => {
      const newPokemonData = {
        id: result.id,
        name: result.name,
        height: result.height,
        weight: result.weight,
        types: result.types.map((type) => type.type.name),
        sprite: result.sprites.front_default,
      }
      return newPokemonData
    });
    setPokemonData(pokemonNew);
  }
  fetchData()
  }, [pokemon]);

  const searchPokemon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPokemon(text);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Choose Pokemon</h1>
      <div>
        <form onSubmit={searchPokemon}>
          <input
            className="text-black"
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review..."
            value={text}
          ></input>
          <FormButton type="submit" version={`${unusedButton}`}>
            Search
          </FormButton>
        </form>
      </div>
      <h1>Pokedex</h1>
      <h2>ID: {pokemonData.id}</h2>
      <h2>Name: {pokemonData.name}</h2>
      <h2>Height: {pokemonData.height}</h2>
      <h2>weight: {pokemonData.weight}</h2>
      <h2>Type(s): {pokemonData.types.map((type) => `${type}, `)}</h2>
      <Image
        src={`${pokemonData.sprite}`}
        alt={`${pokemonData.name} sprite`}
        width={200}
        height={200}
      />
    </div>
  );
};

export default PokedexComp;
