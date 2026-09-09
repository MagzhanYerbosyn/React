import ShowCard from '@/components/ShowCard';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

export default function SearchedShowScreen() {
  const { showId } = useLocalSearchParams<{ showId: string }>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ShowCard id={showId} />
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
