import { COLORS } from '@/constants/ui';
import Header from '@/layout/header/Header';
import { Tabs } from 'expo-router';
import { Calculator, CirclePlus, Star } from 'lucide-react-native';

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        header: () => <Header />,
      }}
    >
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
