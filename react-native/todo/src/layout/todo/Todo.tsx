import StyledText from '@/components/StyledText';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ITodoProps {
  text: string;
  isCompleted: boolean;
}

const Todo = ({ text, isCompleted }: ITodoProps) => {
  return <StyledText>{text}</StyledText>;
};

const styles = StyleSheet.create({});

export default Todo;
