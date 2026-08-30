import { COLORS } from '@/constants/ui';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TProps = TextProps & {
  logo?: boolean;
};

const StyledText = ({ logo, style, ...props }: TProps) => {
  return <Text style={[logo && styles.logo, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  logo: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 700,
    color: COLORS.PRIMARY_TEXT,
  },
});

export default StyledText;
