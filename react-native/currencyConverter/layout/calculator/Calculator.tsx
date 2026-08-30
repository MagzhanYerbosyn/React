import Card from '@/components/Card';
import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/ui';
import { ArrowLeftRight } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const Calculator = () => {
  const [isSwapPressed, setIsSwapPressed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.calculatorHeader}>
        <View style={styles.infoContainer}>
          <StyledText>FROM</StyledText>
          <Card title="USD" text="US Dollar" style={styles.cardContainer} />
        </View>
        <Pressable
          style={[styles.swapContainer, isSwapPressed && styles.swapPressed]}
          onPressIn={() => setIsSwapPressed(true)}
          onPressOut={() => setIsSwapPressed(false)}
        >
          <ArrowLeftRight color={COLORS.PRIMARY} />
        </Pressable>
        <View style={styles.infoContainer}>
          <StyledText>TO</StyledText>
          <Card title="EUR" text="Euro" style={styles.cardContainer} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: COLORS.PRIMARY_BG,
    borderRadius: 16,
    boxShadow: '0px 8px 10px #0000001A, 0px 20px 25px #0000001A',
  },
  calculatorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  infoContainer: {
    gap: 8,
  },
  cardContainer: {
    width: 120,
  },
  swapContainer: {
    marginBottom: 18,
  },
  swapPressed: {
    opacity: 0.5,
  },
});

export default Calculator;
