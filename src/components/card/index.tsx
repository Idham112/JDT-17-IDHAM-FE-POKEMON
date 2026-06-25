import { useState } from "react";
import { useNavigate } from "react-router";
import type { PokemonDetails } from "@/service/Pokemons";
import { getTypeColor } from "@/utils/pokemonTypes";

interface Props {
  pokemon: PokemonDetails;
  onRelease?: (pokemon: PokemonDetails) => void;
}

const SPRITE_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
const SPRITE_FALLBACK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const Card = ({ pokemon, onRelease }: Props) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(`${SPRITE_BASE}/${pokemon.id}.gif`);
  const formattedId = String(pokemon.id).padStart(3, "0");

  return (
    <div
      onClick={() => navigate(`/pokemon/${pokemon.id}`, { state: pokemon })}
      className="group relative flex cursor-pointer flex-col items-center rounded-none border border-white/10 bg-white/10 p-4 pt-3 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-white/15 hover:shadow-lg hover:shadow-indigo-500/15"
    >
      <span className="absolute top-3 left-3 font-['Press_Start_2P'] text-[8px] tracking-wider text-indigo-300">
        No.{formattedId}
      </span>

      <div className="flex h-24 items-center justify-center py-2">
        <img
          className="h-full object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
          src={imgSrc}
          alt={pokemon.name}
          onError={() => setImgSrc(`${SPRITE_FALLBACK}/${pokemon.id}.png`)}
        />
      </div>

      <span className="mt-1 text-center text-sm font-medium capitalize text-white/90">
        {pokemon.name}
      </span>
      <div className="flex justify-center gap-1 mt-1">
        {pokemon.types.map((el) => {
          const colors = getTypeColor(el.type.name);
          return (
            <span
              key={el.type.name}
              className="px-1.5 py-0.5 text-[6px] font-['Press_Start_2P'] uppercase"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {el.type.name}
            </span>
          );
        })}
      </div>
      {onRelease && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRelease(pokemon);
          }}
          className="mt-2 w-full border border-red-500/30 bg-red-700/60 px-3 py-1.5 font-['Press_Start_2P'] text-[7px] uppercase tracking-wider text-red-200 transition-all duration-200 hover:border-red-400/60 hover:bg-red-600/80 hover:text-white"
        >
          FREE
        </button>
      )}
    </div>
  );
};

export default Card;
