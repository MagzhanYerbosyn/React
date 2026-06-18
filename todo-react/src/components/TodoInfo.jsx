const TodoInfo = (props) => {
  const { total, done, onDeleteAllButtonClick } = props;

  let hasTasks = total > 0;

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">{`Done ${done} from ${total} tasks`}</div>

      {hasTasks && (
        <button className="todo__delete-all-button" type="button" onClick={onDeleteAllButtonClick}>
          Delete all
        </button>
      )}
    </div>
  );
};

export default TodoInfo;
