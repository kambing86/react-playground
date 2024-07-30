import { useState } from 'react';

import type { Todo } from '@/types/todo';
import { EventType, useEventBus } from '@/utils/event';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEventBus(EventType.ADD_TODO, (todo) => {
    setTodos((prev) => [...prev, todo]);
  });
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
