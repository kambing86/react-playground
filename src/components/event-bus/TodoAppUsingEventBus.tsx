import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoAppUsingEventBus = () => {
  return (
    <div>
      <h3>Using event bus</h3>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default TodoAppUsingEventBus;
