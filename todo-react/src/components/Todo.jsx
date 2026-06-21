import { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import TodoInfo from './TodoInfo';
import TodoList from './TodoList';

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 'task-1', title: 'Buy Milk', isDone: false },
    { id: 'task-2', title: 'Pet dog', isDone: true },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const deleteAllTasks = () => {
    console.log('Deleting all tasks...');
  };

  const deleteTask = (taskId) => {
    console.log(`Deleting a task with id: ${taskId}...`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task with id: ${taskId} is ${isDone ? 'complete' : 'not complete'}`);
  };

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
