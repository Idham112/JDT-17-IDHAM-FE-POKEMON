import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { getPokemonDetail } from "@/service/Pokemons";
import { getTypeColor } from "@/utils/pokemonTypes";
import type { PokemonDetails } from "@/service/Pokemons";
import StatBar from "@/components/stat-bar";
import Button from "@/components/button";

const SPRITE_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const SPRITE_FALLBACK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(
    (location.state as PokemonDetails) || null,
  );
  const [imgSrc, setImgSrc] = useState(
    `${SPRITE_BASE}/${pokemon?.id ?? 0}.png`,
  );

  useEffect(() => {
    if (pokemon) return;
    if (!id) return;
    const fetchDetail = async () => {
      const data = await getPokemonDetail(id);
      setPokemon(data);
    };
    fetchDetail();
  }, [id, pokemon]);

  if (!pokemon) return <div className="p-4 text-center">Loading...</div>;

  console.log("pokemon details: " + pokemon);

  const formattedId = String(pokemon.id).padStart(3, "0");

  return (
    <div
      className="min-h-full p-4 space-y-4 bg-[#1a1a2e]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Header */}
      <span className="font-['Press_Start_2P'] text-[8px] tracking-wider text-indigo-300">
        No.{formattedId}
      </span>

      {/* Sprite */}
      <div className="flex justify-center">
        <img
          className="h-28 object-contain drop-shadow-lg"
          src={imgSrc}
          alt={pokemon.name}
          onError={() => setImgSrc(`${SPRITE_FALLBACK}/${pokemon.id}.png`)}
        />
      </div>

      {/* Name */}
      <h1 className="text-center font-['Press_Start_2P'] text-sm capitalize text-white/90">
        {pokemon.name}
      </h1>

      {/* Types */}
      <div className="flex justify-center gap-3">
        {pokemon.types.map((el) => {
          const colors = getTypeColor(el.type.name);
          return (
            <span
              key={el.type.name}
              className={`px-3 py-1.5 font-['Press_Start_2P'] text-[8px] uppercase tracking-wider ${colors.glow}`}
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {el.type.name}
            </span>
          );
        })}
      </div>

      {/* Info */}
      <div className="grid grid-cols-2 border border-white/10 bg-white/10 backdrop-blur-sm">
        <div className="border-r border-white/10 py-3 text-center">
          <span className="block font-['Press_Start_2P'] text-[7px] text-indigo-300">
            Height
          </span>
          <span className="mt-1 block text-sm text-white/80">
            {(pokemon.height / 10).toFixed(1)} m
          </span>
        </div>
        <div className="py-3 text-center">
          <span className="block font-['Press_Start_2P'] text-[7px] text-indigo-300">
            Weight
          </span>
          <span className="mt-1 block text-sm text-white/80">
            {(pokemon.weight / 10).toFixed(1)} kg
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-2">
        <span className="block font-['Press_Start_2P'] text-[7px] text-indigo-300">
          ── Base Stats ──
        </span>
        <StatBar label="HP" value={pokemon.stats[0].base_stat} />
        <StatBar label="Atk" value={pokemon.stats[1].base_stat} />
        <StatBar label="Def" value={pokemon.stats[2].base_stat} />
        <StatBar label="Sp.A" value={pokemon.stats[3].base_stat} />
        <StatBar label="Sp.D" value={pokemon.stats[4].base_stat} />
        <StatBar label="Spe" value={pokemon.stats[5].base_stat} />
      </div>

      {/* Abilities */}
      <div className="space-y-2">
        <span className="block font-['Press_Start_2P'] text-[7px] text-indigo-300">
          ── Abilities ──
        </span>
        <div className="flex flex-wrap gap-2">
          {pokemon.abilities.map((el) => (
            <span
              key={el.ability.name}
              className="bg-white px-3 py-1.5 font-['Press_Start_2P'] text-[8px] uppercase tracking-wider text-stone-800"
            >
              {el.ability.name}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Button
          btnText="CATCH!"
          onClick={() =>
            navigate(`/pokemon/${pokemon.id}/catch`, { state: pokemon })
          }
        />
      </div>
    </div>
  );
};

export default PokemonDetail;
