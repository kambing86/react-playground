import { useTodos } from '@/hooks/todos';

const TodoList = () => {
  const [todos] = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
