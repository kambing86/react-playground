import { useState } from 'react';
import { v7 as uuid } from 'uuid';

import { EventType, eventBus } from '@/utils/event';

const AddTodo = () => {
  const [todo, setTodo] = useState<string>('');
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
          eventBus.dispatch(EventType.ADD_TODO, {
            id: uuid(),
            text: todo,
          });
          setTodo('');
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
