import { COLORS } from '@/constants/ui';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TStyledTextProps = TextProps;

function StyledText({ style, ...props }: TStyledTextProps) {
  return <Text style={[styles.base, style]} {...props} />;
}

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
});

export default StyledText;
