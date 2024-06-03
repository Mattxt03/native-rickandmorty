import { useDispatch } from 'react-redux';
import { FavChar } from '../models/CharacterTypes'; // Adjust the path as necessary
import { addFavoriteCharacter } from '@/redux/favoritesSlice';

const useHandleFavs = () => {
  const dispatch = useDispatch();

  const handleAddCharToFav = (character: FavChar) => {
    dispatch(addFavoriteCharacter(character));
  };

  return {
    handleAddCharToFav,
  };
};

export default useHandleFavs;