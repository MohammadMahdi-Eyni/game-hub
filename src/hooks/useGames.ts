
import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top : number
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}



const useGames = (gameQuery : GameQuery) => useData<Game>("/games",{params : {genres :gameQuery.genre?.id,platforms : gameQuery.platform?.id,ordering : gameQuery.order?.slug,search : gameQuery.searchText,search_exact : true }},[gameQuery])

export default useGames;
