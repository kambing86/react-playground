import { useState } from 'react';

import Button from '../buttons/Button';
import TodoAppUsingEventBus from './event-bus/TodoAppUsingEventBus';
import TodoAppUsingJotai from './jotai/TodoAppUsingJotai';

const TodoApp = () => {
  const [ary, setAry] = useState<number[]>([]);
  return (
    <div>
      <h2>TodoApp</h2>
      {ary.map((key) => (
        <TodoAppUsingEventBus key={key} />
      ))}
      {ary.map((key) => (
        <TodoAppUsingJotai key={key} />
      ))}
      <div>
        <Button
          type="button"
          variant="info"
          onClick={() => {
            setAry((prev) => [...prev, prev.length]);
          }}
        >
          Add new app
        </Button>
      </div>
    </div>
  );
};

export default TodoApp;
