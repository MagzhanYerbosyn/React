import { Tabs } from 'expo-router';
import { Bookmark, Clapperboard } from 'lucide-react-native';

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tabs.Screen
        name="shows"
        options={{
          title: 'Search Shows',
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
