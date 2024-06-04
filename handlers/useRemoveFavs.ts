import { removeFavoriteChar } from "@/redux/favoritesSlice";
import { useDispatch } from "react-redux";

const useRemoveFavs = () => {

    // Todo, refactor
    const dispatch = useDispatch();

    const handleRemoveFavChar = (id: number) => {
        dispatch(removeFavoriteChar(id));
      };
}

export default useRemoveFavs