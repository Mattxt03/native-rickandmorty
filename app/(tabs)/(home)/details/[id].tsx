import Character from "@/components/Character/Character";
import { useGetCharactersByIdQuery } from "@/redux/ramApi";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const charDetails = () => {
    const { id } = useLocalSearchParams();
    const { data, error, isLoading } = useGetCharactersByIdQuery(Number(id));

  if (!data) return <Text>No character data</Text>;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }} className="bg-blue-400">
      <Character id={data.id} name={data.name} status={data.status} species={data.species} gender={data.gender} image={data.image} location={data.location.name} />
    </View>
  );
}

export default charDetails;