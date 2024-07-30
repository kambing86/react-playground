import { useState } from 'react';
import { v7 as uuid } from 'uuid';

import { useTodos } from '@/hooks/todos';
import Button from '../buttons/Button';

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
      <Button
        type="submit"
        variant="success"
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
      </Button>
    </form>
  );
};

export default AddTodo;
