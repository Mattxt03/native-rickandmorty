import { EpisodeModel } from "@/models/Episode"
import { View, Text } from "react-native"

const EpisodeCard: React.FC<EpisodeModel> = ({id, name, air_date, episode}) => {

    return (
     <View className="items-center justify-center rounded-lg overflow-hidden bg-white shadow-md my-4 mx-4">
      <View className="flex-1 p-6 items-center">
        <Text className="text-xl font-bold flex-wrap">{name}</Text>
        <Text style={{fontStyle: 'italic'}}>Release date:</Text>
        <Text>{air_date}</Text>
        <Text>{episode}</Text>
      </View>
    </View>
    )
}

export default EpisodeCard