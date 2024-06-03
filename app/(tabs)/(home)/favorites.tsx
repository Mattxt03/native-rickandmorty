import FavCharacterList from "@/components/FavCharacters/FavCharacterList";
import { removeFavoriteChar } from "@/redux/favoritesSlice";
import { State } from "@/redux/store";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoritesScreen = () => {

    const dispatch = useDispatch();

    const favoriteCharacters = useSelector((state: State) => state.favorites.characters);

    if(favoriteCharacters.length === 0) return (
        <SafeAreaView>
            <Text className="text-4xl mx-4 mt-4"> No favorites, go add one! </Text>
        </SafeAreaView>
    )

    const handleRemoveFavChar = (id: number) => {
        dispatch(removeFavoriteChar(id));
    };

    return (
        <GestureHandlerRootView>
            <SafeAreaView style={{flex: 1}}>
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
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default FavoritesScreen