import { Image, StyleSheet, Platform, ScrollView, View, Text, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { CharacterModel } from '@/models/Character';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from '@/components/Characterlist/CharacterList';

const HomeScreen = () => {

  const [characters, setCharacters] = useState<CharacterModel[]>([]);

  useEffect(() => {
    axios.get<{ results: CharacterModel[] }>('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <GestureHandlerRootView>
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.titleContainer}>
        <Text className='text-2xl'>Characters</Text>
      </View>
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
        <View>
          <CharacterList 
            name={item.name} 
            status={item.status} 
            species={item.species} 
            type={item.status} 
            gender={item.gender} 
            image={item.image} 
            location={item.location.name}
          />
        </View>
      )}/>
    </SafeAreaView>
    
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});


export default HomeScreen;