import SummaryCard from './SummaryCard/SummaryCard';
import './TaskSummary.css';

const TaskSummary = () => {
  return (
    <div className="task-summary">
      <SummaryCard stat={5} statName="total tasks" />
      <SummaryCard stat={3} statName="pending" pending />
      <SummaryCard stat={2} statName="completed" />
    </div>
  );
};

export default TaskSummary;
