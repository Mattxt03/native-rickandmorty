import { View, Image, Text } from "react-native"
import { CharacterCard } from "@/models/Character";

const CharacterList: React.FC<CharacterCard> = ({image, name, species, location, status}) => {
    return (
        <View className="bg-white rounded-lg overflow-hidden shadow-md my-4 mx-4">
      <Image
        source={{ uri: image }}
        className="w-full h-48"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-xl font-bold text-center mb-2">{name}</Text>
        <Text className="text-gray-700 text-base text-center">{status}</Text>
        <Text className="text-gray-700 text-base text-center">{species}</Text>
        <Text className="text-gray-700 text-base text-center">{location}</Text>
      </View>
    </View>
    )
}

export default CharacterList;