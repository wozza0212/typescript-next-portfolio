'use client'
import { BaseLayout } from "@/components";
import PokedexComponent from "@/components/Pokedex/pokedex";
import { useState } from "react";
const Pokedex = () => {
    const [text, setText] = useState("pikachu");
    const [pokemonName, setPokemonName] = useState("mew");
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    };
    const submitPokemon = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPokemonName(text);
    };

  return (
    <BaseLayout>
      <h1>Pokedex</h1>
      <form onSubmit={submitPokemon}>
      <input
              className="text-black"
              type="text"
              onChange={handleTextChange}
              placeholder="Write a review..."
              value={text}
            ></input>
            </form>

      <PokedexComponent pokemonName={pokemonName}/>
    </BaseLayout>
  );
};
export default Pokedex;
