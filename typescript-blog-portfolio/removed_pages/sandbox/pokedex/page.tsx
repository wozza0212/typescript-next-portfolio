"use client";
import { BaseLayout } from "@/components";
import PokedexComp from "@/components/unused_components/Pokedex/pokedexFetch";
const Pokedex = () => {
  return (
    <BaseLayout>
      <h1>Pokedex</h1>
      <PokedexComp />
    </BaseLayout>
  );
};
export default Pokedex;
