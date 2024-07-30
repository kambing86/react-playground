import { useState } from 'react';
import { v7 as uuid } from 'uuid';

const AddTodo = () => {
  const [_, setTodos] = useTodos();
  const [todo, setTodo] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button
        type="submit"
        onClick={() => {
          setTodos((prev) => [
            ...prev,
            {
              id: uuid(),
              text: todo,
            },
          ]);
          setTodo('');
        }}
      >
        Add
      </button>
    </form>
  );
};
import { useTodos } from '@/hooks/todos';

export default AddTodo;
