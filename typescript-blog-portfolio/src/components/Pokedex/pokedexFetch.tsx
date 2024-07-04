import { FormButton } from "@/components";
import PokeAPI from "pokeapi-typescript";
import Image from "next/image";
import { useEffect, useState, FormEvent } from "react";
import styles from "./pokedex.module.css";

type PokemonData = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[]; // Update the type to string[]
  sprite: string;
  evolvesFrom: string | null;
};

const PikachuStats = {
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  types: ["electric"],
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  evolvesFrom: null,
};

const PokedexComp = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState<PokemonData>(PikachuStats);
  const [text, setText] = useState("");
  const [searchError, setSearchError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setSearchError(false);
      try {
        const pokemonNew = await PokeAPI.Pokemon.resolve(pokemon).then(
          async (result) => {
            setIsLoading(true);
            const evolvesFrom = await PokeAPI.PokemonSpecies.fetch(result.id);
            const newPokemonData = {
              id: result.id,
              name: result.name,
              height: result.height,
              weight: result.weight,
              types: result.types.map((type) => type.type.name),
              sprite: result.sprites.front_default,
              evolvesFrom: evolvesFrom.evolves_from_species?.name,
            };
            return newPokemonData;
          }
        );
        setIsLoading(false);
        setPokemonData(pokemonNew);
      } catch (error) {
        setSearchError(true);
      }
    };
    fetchData();
  }, [pokemon]);

  const searchPokemon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPokemon(text);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text !== "") {
      setBtnDisabled(false);
    }
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
            placeholder="Enter Pokemon Name..."
            value={text}
          ></input>
          {!btnDisabled ? (
            <FormButton type="submit" version={`primaryButton`}>
              Search
            </FormButton>
          ) : (
            <FormButton
              type="submit"
              version={`disabledButton`}
              isDisabled={btnDisabled}
            >
              Search
            </FormButton>
          )}
        </form>
      </div>
      {isLoading && (
        <div>
          <h1>Page Loading</h1>
        </div>
      )}
      {!searchError && !isLoading && (
        <div>
          <h1>Pokedex Results</h1>
          <div className={styles.pokemonCard}>
            <span className={styles.resultSpan}>
              <h2>ID: </h2>
              <h2> {pokemonData.id}</h2>
            </span>
            <span className={styles.resultSpan}>
              <h2>Name: </h2>
              <h2>{pokemonData.name}</h2>
            </span>
            <span className={styles.resultSpan}>
              <h2>Height:</h2>
              <h2> {pokemonData.height}</h2>
            </span>
            <span className={styles.resultSpan}>
              <h2>weight:</h2>
              <h2> {pokemonData.weight}</h2>
            </span>
            <span className={styles.resultSpan}>
              <h2>Type(s):</h2>
              <h2> {pokemonData.types.join(", ")}</h2>
            </span>
            <div className={styles.spriteBorder}>
              <Image
                src={`${pokemonData.sprite}`}
                alt={`${pokemonData.name} sprite`}
                width={200}
                height={200}
              />
            </div>
            <div>
              {pokemonData.evolvesFrom ? (
                <span className={styles.resultSpan}>
                  <h2>Evolves From:</h2>
                  <h2> {pokemonData.evolvesFrom}</h2>
                </span>
              ) : (
                <span>
                  <h2>Base Form</h2>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      {searchError && (
        <div>
          <h2>Error fetching data</h2>
        </div>
      )}
    </div>
  );
};

export default PokedexComp;
