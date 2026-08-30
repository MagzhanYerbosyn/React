import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/ui';
import { HandCoins } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <HandCoins size={28} color={COLORS.PRIMARY} />
      <StyledText logo>QuickConverter</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 62,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Header;
