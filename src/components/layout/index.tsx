import { Outlet, useLocation, useNavigate } from "react-router";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetail = /^\/pokemon\/\d+/.test(location.pathname);
  const isHome = location.pathname === "/";
  const isMyPokemon = location.pathname === "/pokemon/mypokemon";

  return (
    <div className="h-screen flex justify-center bg-neutral-800">
      <div className="flex flex-col h-full w-96">
        <nav
          className="relative flex items-center w-full h-16 shrink-0 px-4 border-b border-indigo-500/30 shadow-[0_2px_12px_rgba(99,102,241,0.15)]"
          style={{
            backgroundColor: "rgba(18,18,42,0.9)",
            backdropFilter: "blur(12px)",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(99,102,241,0.04) 0px, rgba(99,102,241,0.04) 1px, transparent 1px, transparent 3px)",
          }}
        >
          {isDetail ? (
            <button
              onClick={() => navigate(-1)}
              className="font-['Press_Start_2P'] text-[10px] text-indigo-300 transition-all duration-200 hover:text-indigo-200 hover:shadow-[0_0_8px_rgba(99,102,241,0.4)]"
            >
              ◀ Back
            </button>
          ) : (
            <div className="flex items-center gap-5">
              <button
                onClick={() => navigate("/")}
                className={`font-['Press_Start_2P'] text-[10px] tracking-wider transition-all duration-200 ${
                  isHome
                    ? "text-white drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
                    : "text-indigo-400/60 hover:text-indigo-300"
                }`}
              >
                ◉ Pokedex
              </button>
              <button
                onClick={() => navigate("/pokemon/mypokemon")}
                className={`font-['Press_Start_2P'] text-[10px] tracking-wider transition-all duration-200 ${
                  isMyPokemon
                    ? "text-white drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
                    : "text-indigo-400/60 hover:text-indigo-300"
                }`}
              >
                ★ My Pokémon
              </button>
            </div>
          )}
        </nav>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <footer
          className="flex items-center justify-between w-full h-10 shrink-0 px-4 border-t border-indigo-500/30 shadow-[0_-2px_12px_rgba(99,102,241,0.1)]"
          style={{
            backgroundColor: "rgba(18,18,42,0.9)",
            backdropFilter: "blur(12px)",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(99,102,241,0.04) 0px, rgba(99,102,241,0.04) 1px, transparent 1px, transparent 3px)",
          }}
        >
          <span className="text-[8px] text-indigo-500/40">●</span>
          <span className="font-['Press_Start_2P'] text-[6px] text-indigo-400/60 tracking-widest">
            &copy; 2026 My Pokedex
          </span>
          <span className="text-[8px] text-indigo-500/40">●</span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
