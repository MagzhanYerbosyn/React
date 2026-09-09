import { useSearchById } from '@/hooks/useSearch';
import { useAppStore } from '@/stores/app.store';
import { router, usePathname } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface IProps {
  id: string;
}

const ShowCard = ({ id }: IProps) => {
  const { addToFavoriteShows, deleteFromFavoriteShows } = useAppStore();
  const { data } = useSearchById(id);

  const path = usePathname();

  return (
    <View style={[styles.card, path === '/favorites' && { marginBottom: 18 }]}>
      <View style={styles.imageWrapper}>
        <Text style={styles.mainTitle}>{data?.name}</Text>
        {data?.image ? (
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
        {path !== '/favorites' && (
          <View>
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
              onPress={() => {
                data?.id && addToFavoriteShows(data?.id.toString());
                router.push({
                  pathname: '/favorites',
                });
              }}
            >
              <Text style={styles.buttonText}>Add to Favorites</Text>
            </Pressable>
          </View>
        )}
        {path === '/favorites' && (
          <View style={{ alignItems: 'center' }}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.buttonHover]}
              onPress={() => {
                router.push({
                  pathname: '/(tabs)/shows/[showId]',
                  params: { showId: data!.id },
                });
              }}
            >
              <Text style={styles.buttonText}>More information</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [styles.deleteButton, pressed && styles.buttonHover]}
              onPress={() => {
                data?.id && deleteFromFavoriteShows(data?.id.toString());
              }}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  deleteButton: {
    marginTop: 12,
    width: 150,
    height: 40,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f84e38',
    borderRadius: 12,
  },
});

export default ShowCard;
