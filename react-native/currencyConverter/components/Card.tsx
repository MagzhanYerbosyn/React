import { COLORS } from '@/constants/ui';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import StyledText from './StyledText';

type TProps = {
  title: string;
  text: string;
  titleSize?: 'small' | 'large';
  textSize?: 'small' | 'large';
  style?: StyleProp<ViewStyle>;
};

const Card = ({ title, text, titleSize = 'small', textSize = 'small', style }: TProps) => {
  return (
    <View style={[styles.container, style]}>
      <StyledText style={titleSize === 'small' ? styles.title_small : styles.title_large}>
        {title}
      </StyledText>
      <StyledText style={textSize === 'small' ? styles.text_small : styles.text_large}>
        {text}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'column',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    backgroundColor: COLORS.SECONDARY_BG,
  },
  title_small: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.PRIMARY_TEXT,
  },
  text_small: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: COLORS.SECONDARY_TEXT,
  },
  title_large: {
    fontWeight: '800',
  },
  text_large: {},
});

export default Card;
