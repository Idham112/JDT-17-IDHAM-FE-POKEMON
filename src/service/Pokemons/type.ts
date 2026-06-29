export interface ResponseData {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemons[];
}

export interface Pokemons {
  id: number;
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbilities[];
}

export interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbilities {
    ability: {
        name: string
    }
}
