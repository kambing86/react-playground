import './App.css';
import { client } from './data/starwars/client';
import { useAllFilmsQuery } from './data/gql/starwars';
import styles from './App.module.scss';

const App = () => {
  const { data } = useAllFilmsQuery(client);
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
