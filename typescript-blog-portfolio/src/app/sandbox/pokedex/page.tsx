"use client";
import { BaseLayout } from "@/components";
import PokedexComponent from "@/components/Pokedex/pokedex";
import { useState } from "react";

const Pokedex = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const [text, setText] = useState<string>("pikachu");
  const [pokemonName, setPokemonName] = useState<string>("pikachu");

  const searchPokemon = async () => {
    e.preventDefault();
    console.log("searching for pokemon");
    setPokemonName(text);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === "") {
      setPokemonName("pikachu");
    } else {
      setPokemonName(text);
    }
    setText(e.target.value);
  };
  return (
    <BaseLayout>
      <h1>Pokedex</h1>
      <form onSubmit={searchPokemon}>
        <div>
          <input
            className="text-black"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter Pokemon Name"
            value={text}
          ></input>
        </div>
      </form>

      <PokedexComponent pokemonName={pokemonName}/>
    </BaseLayout>
  );
};
export default Pokedex;
