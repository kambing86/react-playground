import './App.css';
import { client } from './data/starwars/client';
import { useAllFilmsQuery } from './data/gql/starwars';

const App = () => {
  const { data } = useAllFilmsQuery(client);
  console.log({ data });
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
