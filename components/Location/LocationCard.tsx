import { LocationModel } from "@/models/Location"
import { View, Text } from "react-native"

const LocationCard: React.FC<LocationModel> = ({id, name, type, dimension}) => {

    return (
     <View className="items-center justify-center rounded-lg overflow-hidden bg-white shadow-md my-4 mx-4">
      <View className="flex-1 p-6 items-center ">
        <Text className="text-xl font-bold flex-wrap">{name}</Text>
        <Text>{type}</Text>
        <Text>{dimension === "unknown" ? dimension.concat(" ", "Dimension") : dimension}</Text>
      </View>
    </View>
    )
}

export default LocationCard