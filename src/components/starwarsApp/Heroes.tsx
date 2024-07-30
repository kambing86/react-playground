import { stripIgnoredCharacters } from 'graphql';
import { useEffect, useState } from 'react';
import { graphqlRequest } from './graphqlRequest';

const query = stripIgnoredCharacters(`
  query($id: ID) {
    film(id: $id) {
        title
        characterConnection {
            characters {
                name
            }
        }
    }
  }
`);

interface Character {
  name: string;
}

interface Props {
  filmId: string;
}

const Heroes = (props: Props) => {
  const [title, setTitle] = useState<string>('');
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  useEffect(() => {
    async function getAllFilms() {
      const response = await graphqlRequest(query, { id: props.filmId });
      const result = await response.json();
      setTitle(result.data.film.title);
      setAllCharacters(
        result.data.film.characterConnection.characters as Character[],
      );
    }
    getAllFilms();
  }, [props.filmId]);
  return (
    <div>
      Showing Heroes for {title}
      <ul>
        {allCharacters.map((c) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
