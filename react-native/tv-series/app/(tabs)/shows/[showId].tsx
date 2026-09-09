import { StyleSheet, Text, View } from 'react-native';

export default function SearchedShowScreen() {
  return (
    <View style={styles.container}>
      <Text>Searched Show Appears here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
