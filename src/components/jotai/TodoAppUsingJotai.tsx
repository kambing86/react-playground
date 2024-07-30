import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoAppUsingJotai = () => {
  return (
    <div>
      <h3>Using jotai</h3>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoAppUsingJotai;
