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
    isCompleted: true,
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

  const totalTasks = todoList.length;
  const completedTasks = todoList.reduce((sum, task) => {
    if (task.isCompleted) {
      return sum + 1;
    }

    return sum;
  }, 0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header totalTasks={totalTasks} completedTasks={completedTasks} />
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
