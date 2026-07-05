import { useState } from 'react';
import ActiveTasks from '../../components/ActiveTasks/ActiveTasks';
import AddTask from '../../components/AddTask/AddTask';
import TaskSummary from '../../components/TaskSummary/TaskSummary';
import type { TTaskItem } from '../../shared/types/TTaskItem';
import './ToDoForm.css';

const ToDoForm = () => {
  const [tasks, setTasks] = useState<TTaskItem[]>([
    { id: crypto?.randomUUID(), taskContent: 'New Task', checkType: false },
    { id: crypto?.randomUUID(), taskContent: 'New Task', checkType: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const addNewTaskHandler = () => {
    const newTask = { id: crypto?.randomUUID(), taskContent: `${newTaskTitle}`, checkType: false };

    setTasks((prevTask) => [...prevTask, newTask]);
    setNewTaskTitle('');
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
        <ActiveTasks tasks={tasks} />
      </form>
      {/* TODO BODY */}
    </div>
  );
};

export default ToDoForm;
