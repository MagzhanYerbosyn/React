import './AddTask.css';

const AddTask = () => {
  return (
    <div className="add-task-wrapper">
      <input
        className="add-task__input"
        type="text"
        placeholder="Add a new task for today..."
        minLength={1}
        maxLength={42}
      />
      <button className="button" type="submit">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
