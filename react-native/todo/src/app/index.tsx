import Header from '@/layout/header/Header';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Header />
      <Text>I finally made something to connect with ios</Text>
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
