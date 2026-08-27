import { ITodo } from '@/types/todo';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from '../todoItem/TodoItem';

type TTodoListProps = {
  todos: ITodo[];
};

function TodoList({ todos }: TTodoListProps) {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => <TodoItem text={item.text} isCompleted={item.isCompleted} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default TodoList;
