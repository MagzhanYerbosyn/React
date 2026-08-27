import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/ui';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type THeaderProps = {
  totalTasks: number;
  completedTasks: number;
};

function Header({ totalTasks, completedTasks }: THeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText>Todo app</StyledText>
        <StyledText>August 27, 2026</StyledText>
      </View>
      <StyledText>
        Completed: {completedTasks}/{totalTasks}
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});

export default Header;
