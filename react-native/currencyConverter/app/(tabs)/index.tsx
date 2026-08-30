import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/ui';
import Calculator from '@/layout/calculator/Calculator';
import { StyleSheet, View } from 'react-native';

const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <StyledText style={styles.title}>Converter</StyledText>
        <StyledText style={styles.secondary_text}>Real-time exchange rates</StyledText>
      </View>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  titleContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 600,
  },
  secondary_text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
    color: COLORS.SECONDARY_TEXT,
  },
});

export default Tab;
