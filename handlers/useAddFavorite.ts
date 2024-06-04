import { useDispatch } from 'react-redux';
import { FavChar } from '../models/CharacterTypes';
import { addFavoriteCharacter, removeFavoriteChar } from '@/redux/favoritesSlice';

const useAddFavorite = () => {
  const dispatch = useDispatch();

  const handleAddCharToFav = (character: FavChar) => {
    dispatch(addFavoriteCharacter(character));
  };

  return {
    handleAddCharToFav,
  };
};

export default useAddFavorite;