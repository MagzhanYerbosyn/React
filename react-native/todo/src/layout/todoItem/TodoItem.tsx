import StyledButton from '@/components/StyledButton';
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
      <StyledText style={[{ textDecorationLine: isCompleted ? 'line-through' : 'none' }]}>
        {text}
      </StyledText>
      <View style={styles.controlContainer}>
        <StyledButton icon="pencil" />
        <StyledButton icon="trash" />
      </View>
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
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default TodoItem;
