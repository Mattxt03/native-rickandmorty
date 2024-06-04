import { FavChar } from "@/models/CharacterTypes";
import { removeFavoriteChar } from "@/redux/favoritesSlice";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useDispatch } from "react-redux";


export const FavCharacterList: React.FC<FavChar> = ({id, image, name, species, status, location, gender}) => {

  const dispatch = useDispatch();

  const handleRemoveFavChar = (id: number) => {
    dispatch(removeFavoriteChar(id));
  };

    return (
      <View className="flex-row items-center rounded-lg overflow-hidden bg-white shadow-md my-4 mx-4">
      <Image
        source={{ uri: image }}
        className="h-full w-1/2"
        resizeMode="cover"
      />
      <View className="flex-1 p-8 pl-4 ">
        <Text className="text-xl font-bold  flex-wrap">{name}</Text>
        <View className="flex-row items-center">
          <View className={`w-2 h-2 ${status === 'Alive' ? 'bg-green-500' : status === 'Dead' ? 'bg-red-500' : 'bg-orange-500'} rounded-full`} />
          <Text className="text-base pl-1">{status}</Text>  
        </View>   
        <Text className="">{species}</Text>
        <TouchableOpacity className="mt-2 w-16 pl-1 border rounded-xl"> 
        <Link 
        href={{
        pathname: '/details/[id]',
        params: {id: id}
        }}
        >
        Details {">"}
      </Link>
      </TouchableOpacity>
      <TouchableOpacity className="mt-2 flex-row-reverse" onPress={() => handleRemoveFavChar(id)}>
        <Text> Remove </Text>
      </TouchableOpacity>
      </View>
    </View>
    )
}


export default FavCharacterList