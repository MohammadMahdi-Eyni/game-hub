
import useData from "./useData";
import { Genre } from "./useGenres";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}



const useGames = (genre : Genre | null,platform : Platform | null) => useData<Game>("/games",{params : {genres :genre?.id,platforms : platform?.id}},[genre,platform])

export default useGames;
