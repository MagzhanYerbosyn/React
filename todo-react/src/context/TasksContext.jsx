import { createContext, useCallback, useEffect, useRef, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      { id: 'task-1', title: 'Buy Milk', isDone: false },
      { id: 'task-2', title: 'Pet dog', isDone: true },
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const newTaskInputRef = useRef(null);
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find((task) => !task.isDone)?.id;

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?');

    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }

        return task;
      })
    );
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
      setSearchQuery('');
      newTaskInputRef.current.focus();
    }
  };

  useEffect(() => {
    console.log(`Saving data into a storage, because tasks have been changed: `, tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTasks =
    clearSearchQuery.length > 0
      ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
      : null;

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,

        addTask,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
