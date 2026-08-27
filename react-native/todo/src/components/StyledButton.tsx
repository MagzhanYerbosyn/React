import { COLORS } from '@/constants/ui';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import StyledText from './StyledText';

type TStyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
};

const StyledButton = ({ label, icon, ...props }: TStyledButtonProps) => {
  return (
    <TouchableOpacity {...props} style={styles.base}>
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
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
