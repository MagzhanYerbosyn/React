import { COLORS } from '@/constants/ui';
import Header from '@/layout/header/Header';
import TodoList from '@/layout/todoList/TodoList';
import { ITodo } from '@/types/todo';
import { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const defaultTodoList: ITodo[] = [
  {
    id: 1,
    text: 'Buy cream milk',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Buy eggs',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Watch Daredevil',
    isCompleted: false,
  },
];

export default function Index() {
  const [todoList, setTodoList] = useState<ITodo[]>(defaultTodoList);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <TodoList todos={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
