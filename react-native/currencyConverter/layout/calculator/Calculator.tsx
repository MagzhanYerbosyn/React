import Card from '@/components/Card';
import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/ui';
import { ArrowLeftRight, DollarSign, Euro } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const Calculator = () => {
  const [isSwapPressed, setIsSwapPressed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.calculatorHeader}>
        <View style={styles.infoContainer}>
          <StyledText style={styles.title}>from</StyledText>
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
          <StyledText style={styles.title}>to</StyledText>
          <Card title="EUR" text="Euro" style={styles.cardContainer} />
        </View>
      </View>
      <View style={styles.calculatorDisplay}>
        <View style={styles.displayLegend}>
          <StyledText style={styles.title}>amount</StyledText>
          <StyledText style={[styles.title, styles.highlight]}>1 usd = 0.92 eur</StyledText>
        </View>
        <View style={styles.currencyCard}>
          <View style={styles.currencyCardRow}>
            <DollarSign />
            <StyledText style={styles.currencyText}>1,000</StyledText>
          </View>
          <View style={styles.divider} />
          <View style={styles.currencyCardRow}>
            <Euro color={COLORS.PRIMARY} />
            <StyledText style={[styles.currencyText, { fontSize: 24, color: COLORS.PRIMARY }]}>
              920.00
            </StyledText>
          </View>
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
  calculatorDisplay: {
    marginTop: 24,
    gap: 12,
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
  displayLegend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currencyCard: {
    padding: 17,
    flexDirection: 'column',
    gap: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    backgroundColor: COLORS.SECONDARY_BG,
  },
  currencyCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currencyText: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: 700,
  },
  title: {
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  highlight: {
    color: COLORS.PRIMARY,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.BORDER,
  },
});

export default Calculator;
