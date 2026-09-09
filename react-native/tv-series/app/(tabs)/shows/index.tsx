import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function ShowsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for TV Show:</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Write TV show name..."
          placeholderTextColor="#888"
        />
      </View>
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
});
