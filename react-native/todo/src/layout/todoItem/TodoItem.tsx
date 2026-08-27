import StyledText from '@/components/StyledText';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ITodoItemProps {
  text: string;
  isCompleted: boolean;
}

const TodoItem = ({ text, isCompleted }: ITodoItemProps) => {
  return <StyledText>{text}</StyledText>;
};

const styles = StyleSheet.create({});

export default TodoItem;
