import TodoItem from './TodoItem';

const TodoList = () => {
  let hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      <TodoItem className="todo__item" id="task-1" title="Buy Milk" isDone={false} />
      <TodoItem className="todo__item" id="task-2" title="Buy Apple" isDone />
    </ul>
  );
};

export default TodoList;
