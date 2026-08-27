import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/ui';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ITodoItemProps {
  text: string;
  isCompleted: boolean;
}

const TodoItem = ({ text, isCompleted }: ITodoItemProps) => {
  return (
    <View style={styles.container}>
      <StyledText>{text}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
});

export default TodoItem;
