import { useState } from 'react';

import Button from './components/buttons/Button';
import TodoAppUsingEventBus from './components/event-bus/TodoAppUsingEventBus';
import TodoAppUsingJotai from './components/jotai/TodoAppUsingJotai';
import { useAllFilmsQuery } from './data/starwars/generated';

import './App.css';
import styles from './App.module.scss';

const App = () => {
  const { data } = useAllFilmsQuery();
  console.log({ data });
  const [ary, setAry] = useState<number[]>([]);
  return (
    <div className="content">
      <h1 className={styles.title}>Rsbuild with React</h1>
      <p className={styles.content}>
        Start building amazing things with Rsbuild.
      </p>
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

export default App;
