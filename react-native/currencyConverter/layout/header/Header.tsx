import StyledText from '@/components/StyledText';
import { HandCoins } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <HandCoins />
      <StyledText logo>Header</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 54,
    paddingHorizontal: 24,
  },
});

export default Header;
