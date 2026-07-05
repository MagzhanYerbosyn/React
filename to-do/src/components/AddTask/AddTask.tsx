import './AddTask.css';

interface IAddTask {
  newTaskTitle: string;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
}

const AddTask = ({ newTaskTitle, setNewTaskTitle }: IAddTask) => {
  return (
    <div className="add-task-wrapper">
      <input
        className="add-task__input"
        type="text"
        placeholder="Add a new task for today..."
        value={newTaskTitle}
        onChange={(event) => {
          setNewTaskTitle(event.target.value);
        }}
      />
      <button className="button" type="submit">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
