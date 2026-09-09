import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Search shows</Text>
        <Text style={styles.cardSubTitle}>Click to the button below to start searching shows!</Text>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonHover]}
          onPress={() =>
            router.push({
              pathname: '/(tabs)/shows',
            })
          }
        >
          <Text style={styles.buttonText}>Search shows</Text>
        </Pressable>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Favorites</Text>
        <Text style={styles.cardSubTitle}>Click to the button below to see your saved shows!</Text>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonHover]}
          onPress={() =>
            router.push({
              pathname: '/favorites',
            })
          }
        >
          <Text style={styles.buttonText}>Go to Favorites</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 48,
  },
  cardContainer: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
  cardTitle: {
    marginBottom: 4,
    fontSize: 28,
    fontWeight: 700,
  },
  cardSubTitle: {
    marginBottom: 24,
    fontSize: 16,
    color: '#4a5565',
  },
  button: {
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

export default Index;
