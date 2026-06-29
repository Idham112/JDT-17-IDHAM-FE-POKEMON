import Button from "@/components/button";
import { getPokemonDetail, type PokemonDetails } from "@/service/Pokemons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const SPRITE_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/";
const SPRITE_FALLBACK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const Catch = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(
    (location.state as PokemonDetails) || null,
  );
  const [jumping, setJumping] = useState(false);
  const [caught, setCaught] = useState(false);
  const [failed, setFailed] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    `${SPRITE_BASE}/${pokemon?.id ?? 0}.gif`,
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

  const handleCatch = () => {
    if (jumping || caught) return;
    setJumping(true);

    if (Math.random() < 0.5) {
      // Success — caught!
      setCaught(true);
      const stored = JSON.parse(localStorage.getItem("my-pokemons") || "[]");
      stored.push(pokemon);
      localStorage.setItem("my-pokemons", JSON.stringify(stored));
      setTimeout(() => {
        navigate("/pokemon/mypokemon");
      }, 1500);
    } else {
      // Failed — pokemon broke free
      setTimeout(() => {
        setJumping(false);
        setFailed(true);
      }, 800);
      setTimeout(() => {
        setFailed(false);
      }, 2500);
    }
  };

  if (!pokemon) return <div className="p-4 text-center">Loading...</div>;

  console.log("pokemon catch: " + pokemon);
  const formattedId = String(pokemon.id).padStart(3, "0");

  return (
    <>
      <style>{`@keyframes jump { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-24px) } }`}</style>
      <div
        className="relative min-h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/backgroundBattle2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="relative z-10 flex flex-col items-center gap-4 py-8">
          <span className="font-['Press_Start_2P'] text-[9px] uppercase tracking-wider text-white">
            Wild {pokemon.name} appeared!
          </span>
          <img
            className="h-64 object-contain drop-shadow-lg"
            src={imgSrc}
            alt={pokemon.name}
            onError={() => setImgSrc(`${SPRITE_FALLBACK}/${pokemon.id}.png`)}
          />
          <div className="flex items-center gap-3">
            <span className="font-['Press_Start_2P'] text-[7px] text-white/60">
              No.{formattedId}
            </span>
            <span className="font-['Press_Start_2P'] text-sm capitalize text-white">
              {pokemon.name}
            </span>
          </div>
          <button
            onClick={handleCatch}
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
          >
            <img
              className={`w-24 h-24 object-contain drop-shadow-[0_0_12px_rgba(99,102,241,0.5)] ${jumping ? "animate-[jump_0.4s_ease-in-out]" : ""}`}
              src="/pokemon-master-ball.gif"
              alt="Throw Master Ball"
            />
          </button>
          {caught && (
            <span className="font-['Press_Start_2P'] text-sm text-yellow-300 drop-shadow-[0_0_12px_rgba(253,224,71,0.8)] animate-pulse">
              ✦ Gotcha! ✦
            </span>
          )}
          {failed && (
            <span className="font-['Press_Start_2P'] text-sm text-red-400 drop-shadow-[0_0_12px_rgba(255,50,50,0.8)] animate-pulse">
              ✦ It broke free! ✦
            </span>
          )}
          {!caught && (
            <Button
              btnText="RUN!"
              onClick={() =>
                navigate(`/pokemon/${pokemon.id}`, { state: pokemon })
              }
              className="rounded-none border-2 border-stone-800 !bg-white !w-auto px-4 py-2 !text-stone-800 hover:!bg-stone-800 hover:!text-white"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Catch;