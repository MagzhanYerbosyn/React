import type { TTaskItem } from '../../shared/types/TTaskItem';
import './TaskItem.css';

type TDeleteTaskItem = TTaskItem & {
  deleteTaskHandler: (id: string) => void;
  changeTaskStatusHandler: (id: string) => void;
};

const TaskItem = ({
  id,
  taskContent,
  checkType,
  deleteTaskHandler,
  changeTaskStatusHandler,
}: TDeleteTaskItem) => {
  return (
    <li className="task-item">
      <input
        className="task-item__checkbox"
        id={id}
        type="checkbox"
        checked={checkType}
        onChange={() => {
          changeTaskStatusHandler(id);
        }}
      />

      <label className="task-item__label" htmlFor={`${id}`}>
        {taskContent}
      </label>

      <button
        className="task-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTaskHandler(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
