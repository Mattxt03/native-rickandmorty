import { FavChar } from "@/models/CharacterTypes";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";


export const FavCharacterList: React.FC<FavChar> = ({id, image, name, species, status, location, gender}) => {

    return (
        <View className="flex-row items-center rounded-lg overflow-hidden bg-white shadow-md my-4 mx-4">
      <Image
        source={{ uri: image }}
        className="h-full w-1/2"
        resizeMode="cover"
      />
      <View className="flex-1 p-8 pl-4 ">
        <Text className="text-xl font-bold  flex-wrap">{name}</Text>
        <Text className=" text-base pl-1">{status}</Text>  
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
        <Text> Remove </Text>
      </TouchableOpacity>
      </View>
    </View>
    )
}


export default FavCharacterList