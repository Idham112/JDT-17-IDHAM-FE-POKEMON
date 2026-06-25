import { usePokemon } from "../../hooks/usePokemon";
import Card from "../../components/card";
import Pagination from "@/components/pagination";
import SkeletonCard from "@/components/skeletonCard";

const Homepage = () => {
  const { pokemon, page, setPage, loading } = usePokemon();

  return (
    <div className="w-full overflow-auto bg-[#1a1a2e]" style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}>
      <h1 className="py-4 text-center font-['Press_Start_2P'] text-[11px] tracking-widest text-white drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]">
        ★ Pokédex ★
      </h1>
      <div className="grid grid-cols-2 gap-3 px-4 pb-4">
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : pokemon.map((el) => (
              <Card key={el.id} pokemon={el} />
            ))}
      </div>
      <Pagination
        page={page}
        onPrev={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
      />
    </div>
  );
};

export default Homepage;