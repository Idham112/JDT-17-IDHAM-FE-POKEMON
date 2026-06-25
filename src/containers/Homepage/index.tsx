import { usePokemon } from "../../hooks/usePokemon";
import Card from "../../components/card";
import Pagination from "@/components/pagination";

const Homepage = () => {
  const { pokemon, page, setPage } = usePokemon();
  

  console.log({ pokemon });

  return (
    <div className="w-full overflow-auto bg-[#1a1a2e]" style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}>
      <div className="grid grid-cols-2 gap-3 p-4">
        {pokemon.map((el) => (
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
