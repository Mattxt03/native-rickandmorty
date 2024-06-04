import FavCharacterList from "@/components/FavCharacter/FavCharacterList";
import { State } from "@/redux/store";
import { Text, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoritesScreen = () => {

    const favoriteCharacters = useSelector((state: State) => state.favorites.characters);

    if(favoriteCharacters.length === 0) return (
        <SafeAreaView className="items-center">
            <Text className="text-xl mx-4 mt-4"> No favorites, go add one! </Text>
        </SafeAreaView>
    )

    return (
        <GestureHandlerRootView>
            <SafeAreaView style={{flex: 1}} className="bg-blue-400">
                <View>
                    <FlatList 
                    data={favoriteCharacters} 
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                    <View>
                        <FavCharacterList
                            id={item.id} 
                            name={item.name} 
                            status={item.status} 
                            species={item.species} 
                            gender={item.gender} 
                            image={item.image} 
                            location={item.location}
                        />
                    </View>           
                    )}/>
                </View>
                
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default FavoritesScreen