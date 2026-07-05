import { useState } from 'react';
import ActiveTasks from '../../components/ActiveTasks/ActiveTasks';
import AddTask from '../../components/AddTask/AddTask';
import TaskSummary from '../../components/TaskSummary/TaskSummary';
import type { TTaskItem } from '../../shared/types/TTaskItem';
import './ToDoForm.css';

const ToDoForm = () => {
  const [tasks, setTasks] = useState<TTaskItem[]>([]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const addNewTaskHandler = () => {
    const newTask = { id: crypto?.randomUUID(), taskContent: `${newTaskTitle}`, checkType: false };

    setTasks((prevTask) => [...prevTask, newTask]);
    setNewTaskTitle('');
  };

  const deleteTaskHandler = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  };

  const changeTaskStatusHandler = (id: string) => {
    const filteredTasks = tasks.map((task) => {
      if (task.id === id) {
        task.checkType = !task.checkType;
      }

      return task;
    });

    setTasks(filteredTasks);
  };

  return (
    <div className="to-do-form">
      {/* TODO HEADER */}
      <div className="to-do-header">
        <h4 className="to-do-header__title">My Tasks</h4>
        <p className="to-do-header__paragraph">
          Stay organized and productive with your daily flow.
        </p>
      </div>
      {/* TODO HEADER */}

      {/* TODO BODY */}
      <form
        className="to-do-body"
        onSubmit={(event) => {
          event.preventDefault();

          if (newTaskTitle.length > 0) addNewTaskHandler();
        }}
      >
        <AddTask newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} />
        <TaskSummary />
        <ActiveTasks
          tasks={tasks}
          deleteTaskHandler={deleteTaskHandler}
          changeTaskStatusHandler={changeTaskStatusHandler}
        />
      </form>
      {/* TODO BODY */}
    </div>
  );
};

export default ToDoForm;
