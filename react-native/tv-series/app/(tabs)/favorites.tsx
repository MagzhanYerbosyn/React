import ShowCard from '@/components/ShowCard';
import { useAppStore } from '@/stores/app.store';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Tab = () => {
  const { favoriteShows } = useAppStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favoriteShows.length > 0 && (
        <FlatList
          data={favoriteShows}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ShowCard id={item} />}
        />
      )}
      {favoriteShows.length === 0 && (
        <Text style={styles.subTitle}>No TV Shows have been added yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    gap: 12,
  },
  title: {
    marginBottom: 4,
    fontSize: 28,
    fontWeight: 700,
  },
  subTitle: {
    marginBottom: 24,
    fontSize: 16,
    color: '#4a5565',
  },
});

export default Tab;
