import { useAllFilmsQuery } from './data/starwars/generated';

import './App.css';
import styles from './App.module.scss';

const App = () => {
  const { data } = useAllFilmsQuery();
  console.log({ data });
  return (
    <div className="content">
      <h1 className={styles.title}>Rsbuild with React</h1>
      <p className={styles.content}>
        Start building amazing things with Rsbuild.
      </p>
      <div>My content</div>
    </div>
  );
};

export default App;
