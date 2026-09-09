import { useSearchById } from '@/hooks/useSearch';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SearchedShowScreen() {
  const { showId } = useLocalSearchParams<{ showId: string }>();

  const { data } = useSearchById(showId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Text style={styles.mainTitle}>{data?.name}</Text>
          {data?.image.original ? (
            <Image
              source={{
                uri: data?.image.original,
              }}
              style={styles.image}
            />
          ) : (
            <Text>No poster available</Text>
          )}
        </View>
        <View style={styles.descriptionWrapper}>
          <View style={styles.descriptionRow}>
            <Text style={styles.descriptionTitle}>Premiered:</Text>
            <Text style={styles.descriptionSubTitle}>{data?.premiered.split('-')[0]}</Text>
          </View>
          <View style={styles.descriptionRow}>
            <Text style={styles.descriptionTitle}>Genres:</Text>
            <Text style={styles.descriptionSubTitle}>{data?.genres.join(', ')}</Text>
          </View>
          <View style={styles.descriptionRow}>
            <Text style={styles.descriptionTitle}>Status:</Text>
            <Text style={styles.descriptionSubTitle}>{data?.status}</Text>
          </View>
          <View style={styles.descriptionRow}>
            <Text style={styles.descriptionSubTitle}>
              {data?.summary ? data?.summary.slice(3, data.summary.length - 4) : 'No description'}
            </Text>
          </View>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonHover]}
            onPress={() =>
              router.push({
                pathname: '/favorites',
              })
            }
          >
            <Text style={styles.buttonText}>Add to Favorites</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    width: 320,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  imageWrapper: {
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 200,
    height: 320,
    borderRadius: 12,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 800,
  },
  descriptionWrapper: {
    marginTop: 12,
    padding: 8,
    gap: 4,
  },
  descriptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  descriptionTitle: {
    fontSize: 20,
    color: '#6a7282',
  },
  descriptionSubTitle: {
    fontSize: 20,
    color: '#000000',
  },
  button: {
    marginTop: 12,
    width: 150,
    height: 40,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38BDF8',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 700,
    color: '#fbf9f9',
  },
  buttonHover: {
    opacity: 0.6,
  },
});
