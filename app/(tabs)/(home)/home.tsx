import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FlatList, GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import CharacterList from '@/components/Characterlist/CharacterList';
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetCharactersQuery } from '@/redux/ramApi';

const HomeScreen = () => {
    
    const [page, setPage] = useState(1)
    const {data, error, isLoading} = useGetCharactersQuery(page);

    if (!data) return (
      <SafeAreaView>
        <Text>No data found...</Text>
      </SafeAreaView>
    );

    const charData = data.results;
  
  return (
    <GestureHandlerRootView>
    <SafeAreaView style={{flex: 1}}>
        <View className='bg-blue-400'>
          <View className='flex-row mt-4 items-center justify-center'>
            <TouchableOpacity onPress={() => setPage(page - 1)} disabled={page === 1} className='bg-white p-1 text-center'>
              <Text className='text-lg'> {"<"}  </Text>
            </TouchableOpacity>
            <TextInput className='bg-white text-black p-1 text-center' editable={false} value={page.toString()}/>
            <TouchableOpacity onPress={() => setPage(page + 1)} disabled={page === data.info.pages} className='bg-white p-1 text-center'>
              <Text className='text-lg'> {">"}  </Text>
            </TouchableOpacity>
          </View>
          <FlatList
          className='m-2'
          data={charData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
          <View>
            <CharacterList
              id={item.id} 
              name={item.name} 
              status={item.status} 
              species={item.species} 
              gender={item.gender} 
              image={item.image} 
              location={item.location.name}
            />
          </View>   
      )}/>
        </View>     
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