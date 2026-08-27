import { COLORS } from '@/constants/ui';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import StyledText from './StyledText';

type TStyledButtonProps = TouchableOpacityProps & {
  label?: string;
};

const StyledButton = ({ label, ...props }: TStyledButtonProps) => {
  return (
    <TouchableOpacity {...props} style={styles.base}>
      {label && <StyledText>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default StyledButton;
