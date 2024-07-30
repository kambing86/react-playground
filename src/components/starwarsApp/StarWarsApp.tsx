import { useEffect, useState } from 'react';
import { stripIgnoredCharacters } from 'graphql';
import { graphqlRequest } from './graphqlRequest';
import Heroes from './Heroes';

const query = stripIgnoredCharacters(`
query {
  allFilms {
    films {
      id
      title
    }
  }
}
`);

interface Film {
  id: string;
  title: string;
}

const StarWarsApp = () => {
  const [allFilms, setAllFilms] = useState<Film[]>([]);
  const [filmId, setFilmId] = useState<string | null>(null);
  useEffect(() => {
    async function getAllFilms() {
      const response = await graphqlRequest(query);
      const result = await response.json();
      setAllFilms(result.data.allFilms.films as Film[]);
    }
    getAllFilms();
  }, []);
  return (
    <div>
      <div>StarWarsApp</div>
      <ul>
        {allFilms.map((film) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <li
            style={{ color: film.id === filmId ? 'yellow' : 'white' }}
            onClick={() => setFilmId(film.id)}
            key={film.id}
          >
            {film.title}
          </li>
        ))}
      </ul>
      {filmId != null && <Heroes filmId={filmId} />}
    </div>
  );
};

export default StarWarsApp;
