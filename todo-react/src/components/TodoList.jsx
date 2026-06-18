import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick } = props;

  let hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className={task.className}
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TodoList;
