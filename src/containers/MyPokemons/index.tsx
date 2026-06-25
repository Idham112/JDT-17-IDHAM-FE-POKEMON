import Card from "@/components/card";
import type { PokemonDetails } from "@/service/Pokemons";
import { useState, useEffect } from "react";

const MyPokemons = () => {
  const [myPokemons, setMyPokemons] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("my-pokemons") || "[]");
    setMyPokemons(stored);
  }, []);

  const handleRelease = (pokemon: PokemonDetails) => {
    const updated = [...myPokemons];
    const index = updated.findIndex((p) => p.id === pokemon.id);
    if (index !== -1) updated.splice(index, 1);
    setMyPokemons(updated);
    localStorage.setItem("my-pokemons", JSON.stringify(updated));
  };

  return (
    <div
      className="w-full min-h-full overflow-auto bg-[#1a1a2e]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {myPokemons.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <span className="font-['Press_Start_2P'] text-[9px] text-indigo-300/60">
            No Pokémon caught yet
          </span>
          <span className="font-['Press_Start_2P'] text-[7px] text-indigo-400/40">
            Go catch some!
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 p-4">
          {myPokemons.map((el, i) => (
            <Card key={`${el.id}-${i}`} pokemon={el} onRelease={handleRelease}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPokemons;
