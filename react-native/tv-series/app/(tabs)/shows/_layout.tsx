import { Stack } from 'expo-router';

export default function ShowsStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Search Shows' }} />
      <Stack.Screen name="[showId]" options={{ title: 'Searched Show' }} />
    </Stack>
  );
}
