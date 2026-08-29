import { COLORS } from '@/constants/ui';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type IStyledCheckboxProps = {
  checked: boolean;
  onCheck: () => void;
};

const StyledCheckbox = ({ checked, onCheck }: IStyledCheckboxProps) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons
        name={checked ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default StyledCheckbox;
