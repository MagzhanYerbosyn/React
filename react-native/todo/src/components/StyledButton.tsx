import { COLORS } from '@/constants/ui';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import StyledText from './StyledText';

type TStyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  variant?: 'primary' | 'danger';
};

const StyledButton = ({ label, icon, variant = 'primary', ...props }: TStyledButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.base,
        variant === 'danger' && styles.danger,
        variant === 'primary' && styles.primary,
      ]}
    >
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
      {label && <StyledText>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  primary: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
  danger: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
});

export default StyledButton;
