import { useSearch } from '@/hooks/useSearch';
import { useAppStore } from '@/stores/app.store';
import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ShowsScreen() {
  const { searchInput, setSearchInput } = useAppStore();

  const { data } = useSearch(searchInput);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for TV Show:</Text>
      <TextInput
        style={styles.input}
        value={searchInput}
        onChangeText={setSearchInput}
        placeholder="Write TV show name..."
        placeholderTextColor="#888"
      />
      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.show.id.toString()}
          renderItem={(item) => (
            <Pressable
              style={({ pressed }) => [pressed && { opacity: 0.8 }]}
              onPress={() => {
                router.push({
                  pathname: '/(tabs)/shows/[showId]',
                  params: { showId: item.item.show.id },
                });
                setSearchInput('');
              }}
            >
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.item.show.name}</Text>
              </View>
            </Pressable>
          )}
          style={styles.cardsList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 600,
  },
  input: {
    height: 48,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: '#dbeafe',
    borderWidth: 2,
    borderColor: '#99a1af',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 500,
  },
  cardsList: {
    padding: 8,
    backgroundColor: '#d1d5dc',
    borderWidth: 1,
    borderColor: '#8a8989',
    borderRadius: 15,
  },
  card: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#efefef',
    borderRadius: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
