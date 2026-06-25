import { useEffect, useState } from "react";
import { getPokemons, type PokemonDetails } from "../service/Pokemons";

export const usePokemon = () => {
  const [page, setPage] = useState(1);
  const [pokemon, setPokemon] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getPokemons(page);
        setPokemon(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemons();
  }, [page]);

  return { pokemon, page, setPage };
};
