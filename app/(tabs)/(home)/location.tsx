import LocationCard from "@/components/Location/LocationCard"
import { useGetLocationsQuery } from "@/redux/ramApi"
import { useState } from "react"
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

const EpisodesScreen = () => {
    const [page, setPage] = useState(1)
    const {data} = useGetLocationsQuery(page)

    if (!data) return (
        <SafeAreaView>
            <Text>No data found...</Text>
        </SafeAreaView>
    )

    const locationData = data.results

    return (
    <GestureHandlerRootView>
    <SafeAreaView style={{flex: 1}} className='bg-blue-400'>
        <View>
          <View className='flex-row items-center justify-center'>
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
          data={locationData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
          <View>
            <LocationCard
              id={item.id}
              name={item.name}
              type={item.type}
              dimension={item.dimension}
            />
          </View>   
      )}/>
        </View>     
    </SafeAreaView>
    </GestureHandlerRootView>
    )
}

export default EpisodesScreen