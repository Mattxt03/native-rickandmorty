import { View, Image, Text } from "react-native"
import { CharacterCard } from "@/models/CharacterTypes";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import useHandleFavs from "@/handlers/useHandleFavs";
import AntDesign from "@expo/vector-icons/build/AntDesign";

const CharacterList: React.FC<CharacterCard> = ({id, image, name, species, status, location, gender}) => {

    const { handleAddCharToFav } = useHandleFavs();


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
      <TouchableOpacity className="mt-2 flex-row-reverse">
      <AntDesign 
      name="heart" 
      size={24} 
      color="black"
      onPress={() => handleAddCharToFav({ id, species, name, status, image, location, gender })} />
      </TouchableOpacity>
      </View>

      
      
    </View>
    )
}

export default CharacterList;