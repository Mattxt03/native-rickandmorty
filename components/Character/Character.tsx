import { View, Image, Text } from "react-native"
import { CharacterCard, CharacterModel } from "@/models/CharacterTypes";

const Character: React.FC<CharacterCard> = ({id, image, name, species, location, status, gender}) => {
    return (
    <View className="items-center w-96 h-auto border bg-white rounded-lg overflow-hidden shadow-lg">
      <View className="p-4">
        <Image
          source={{ uri: image }}
          className="h-72 w-72 mt-2 rounded-lg"
          resizeMode="cover"
        />
      </View>
      <View className="w-72 mb-4 rounded-lg gap-1">
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-xl">{species} {gender}</Text>
        <View className="flex-row items-center">
          <View className={`w-3 h-3 ${status === 'Alive' ? 'bg-green-500' : status === 'Dead' ? 'bg-red-500' : 'bg-orange-500'} rounded-full`} />
          <Text className="text-xl pl-1">{status.toUpperCase()}</Text>  
        </View>
        <Text className=" text-xl text-gray-500" style={{fontStyle: 'italic'}}>Last Seen:</Text>
        <Text className=" text-xl">{location}</Text>
      </View>
    </View>
    )
}

export default Character;