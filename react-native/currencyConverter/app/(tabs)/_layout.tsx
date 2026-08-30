import { Tabs } from 'expo-router';
import { Calculator, CirclePlus, Star } from 'lucide-react-native';

function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2563EBFF' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Calculator size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => <CirclePlus size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Star size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
