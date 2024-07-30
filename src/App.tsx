import TodoAppUsingEventBus from './components/event-bus/TodoAppUsingEventBus';
import TodoAppUsingJotai from './components/jotai/TodoAppUsingJotai';
import { useAllFilmsQuery } from './data/starwars/generated';

import './App.css';
import styles from './App.module.scss';
import { useState } from 'react';

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
      <div>My content</div>
      {/* {ary.map((key) => (
        <TodoAppUsingEventBus key={key} />
      ))}
      {ary.map((key) => (
        <TodoAppUsingJotai key={key} />
      ))}
      <button
        type="button"
        onClick={() => {
          setAry((prev) => [...prev, prev.length]);
        }}
      >
        Add new app
      </button> */}
    </div>
  );
};

export default App;
