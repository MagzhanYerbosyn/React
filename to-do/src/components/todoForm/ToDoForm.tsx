import ToDoBody from './toDoBody/toDoBody';
import './ToDoForm.css';
import ToDoHeader from './toDoHeader/ToDoHeader';

const ToDoForm = () => {
  return (
    <div className="to-do-form">
      <ToDoHeader />
      <ToDoBody />
    </div>
  );
};

export default ToDoForm;
