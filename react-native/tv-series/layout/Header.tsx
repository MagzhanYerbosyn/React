import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.logo}>TV Shows</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#00a6f4',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 800,
    color: '#ffffff',
  },
});

export default Header;
