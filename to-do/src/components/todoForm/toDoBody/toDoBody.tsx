import AddTask from './AddTask/AddTask';
import TaskSummary from './TaskSummary/TaskSummary';
import './toDoBody.css';

const ToDoBody = () => {
  return (
    <form className="to-do-body">
      <AddTask />
      <TaskSummary />
    </form>
  );
};

export default ToDoBody;
