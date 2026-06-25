import API from "../api";
import type { PokemonDetails } from "./type";

export const getPokemons = async (page: number): Promise<PokemonDetails[]> => {
  const limit = 16;
  const offset = (page - 1) * limit;
  try {
    const response = await API.get(`pokemon/?limit=${limit}&offset=${offset}`);
    const data = response.data;

    const details = await Promise.all(
      data.results.map(async (pokemon: { name: string }) => {
        const res = await API.get(`pokemon/${pokemon.name}`);
        const detail = res.data;
        return {
          id: detail.id,
          name: detail.name,
          height: detail.height,
          weight: detail.weight,
          types: detail.types,
          stats: detail.stats,
          abilities: detail.abilities,
        } satisfies PokemonDetails;
      }),
    );

    return details;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPokemonDetail = async (
  id: string,
): Promise<PokemonDetails | null> => {
  try {
    const res = await API.get(`pokemon/${id}`);
    const detail = res.data;
    return {
      id: detail.id,
      name: detail.name,
      height: detail.height,
      weight: detail.weight,
      types: detail.types,
      stats: detail.stats,
      abilities: detail.abilities,
    } satisfies PokemonDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
};
