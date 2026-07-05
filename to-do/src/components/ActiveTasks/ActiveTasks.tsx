import circleIcon from '../../assets/circle-outlined-icon.svg';
import type { TTaskItem } from '../../shared/types/TTaskItem';
import TaskItem from '../TaskItem/TaskItem';
import './ActiveTasks.css';

const ActiveTasks = ({ tasks }: { tasks: TTaskItem[] }) => {
  return (
    <div className="active-tasks">
      <div className="active-tasks__header">
        <img src={circleIcon} alt="circle icon" />
        <h6>Active Tasks</h6>
      </div>
      <ul className="active-tasks__list">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </ul>
    </div>
  );
};

export default ActiveTasks;
