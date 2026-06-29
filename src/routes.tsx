import { createBrowserRouter } from "react-router";
import Homepage from "./containers/Homepage";
import PokemonDetail from "./containers/PokemonDetail";
import Layout from "./components/layout";
import Catch from "./containers/Catch";
import MyPokemons from "./containers/MyPokemons";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      { path: "/pokemon/:id", element: <PokemonDetail /> },
      { path: "/pokemon/:id/catch", element: <Catch /> },
      { path: "/pokemon/mypokemon", element: <MyPokemons /> },
    ],
  },
]);
