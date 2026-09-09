import { Tabs } from 'expo-router';
import { Bookmark, Clapperboard, Home } from 'lucide-react-native';

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="shows"
        options={{
          title: 'SearchShows',
          tabBarIcon: ({ color }) => <Clapperboard size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Bookmark size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
