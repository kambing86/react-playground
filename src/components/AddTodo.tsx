import { useState } from 'react';
import { v7 as uuid } from 'uuid';

import { EventType, eventBus } from '@/utils/event';

const AddTodo = () => {
  const [todo, setTodo] = useState<string>('');
  return (
    <div>
      <input value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button
        type="button"
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
    </div>
  );
};

export default AddTodo;