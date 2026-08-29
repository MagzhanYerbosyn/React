import StyledButton from '@/components/StyledButton';
import StyledCheckbox from '@/components/StyledCheckbox';
import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/ui';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface ITodoItemProps {
  text: string;
  isCompleted: boolean;
}

const TodoItem = ({ text, isCompleted }: ITodoItemProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <StyledCheckbox checked={checked} onCheck={() => setChecked(!checked)} />
        <StyledText style={[{ textDecorationLine: isCompleted ? 'line-through' : 'none' }]}>
          {text}
        </StyledText>
      </View>
      <View style={styles.controlContainer}>
        <StyledButton icon="pencil" />
        <StyledButton icon="trash" variant="danger" />
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default TodoItem;
