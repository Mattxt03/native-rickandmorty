import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import Feather from '@expo/vector-icons/build/Feather';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="(home)/home" options={{headerShown: true, title: "Characters", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />}}/>
      <Tabs.Screen name="(home)/episodes" options={{headerShown: true, title: "Episodes", tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} /> }}/>
      <Tabs.Screen name="(home)/location" options={{headerShown: true, title: "Locations", tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} /> }}/>
      <Tabs.Screen name="(home)/favorites" options={{headerShown: true, title: "Favorites", tabBarIcon: () => <AntDesign name="heart" size={24} color="black" />}}/>
      <Tabs.Screen name="(home)/details/[id]" options={{headerShown: true,  title: "Details", href: null, }}/>
    </Tabs>
    </Provider>
    
  );
}
