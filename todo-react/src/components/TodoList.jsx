import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { tasks = [] } = props;

  let hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem className={task.className} key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TodoList;
