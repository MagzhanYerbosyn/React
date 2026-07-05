import SummaryCard from '../SummaryCard/SummaryCard';
import './TaskSummary.css';

type ITaskSummary = {
  total: number;
  completed: number;
};

const TaskSummary = ({ total, completed }: ITaskSummary) => {
  return (
    <div className="task-summary">
      <SummaryCard stat={total} statName="total tasks" />
      <SummaryCard stat={total - completed} statName="pending" pending />
      <SummaryCard stat={completed} statName="completed" />
    </div>
  );
};

export default TaskSummary;
