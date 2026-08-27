import { ITodo } from '@/types/todo';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Todo from '../todo/Todo';

type TTodoListProps = {
  todos: ITodo[];
};

function TodoList({ todos }: TTodoListProps) {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => <Todo text={item.text} isCompleted={item.isCompleted} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default TodoList;
