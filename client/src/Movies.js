import React, { useState } from "react";
import { Query } from "react-apollo";
import { AllFilms } from "./queries";
import CurrentMovie from "./CurrentMovie";

const Movies = () => {
  const [pickedMovieId, setMovieId] = useState(undefined);
  const handleMovieClick = id => setMovieId(id);
  return (
    <React.Fragment>
      <Query query={AllFilms}>
        {({ loading, data }) =>
          loading ? (
            <p>Loading ...</p>
          ) : (
            <ul>
              {data.allFilms.films.map(film => (
                <li key={film.id} onClick={() => handleMovieClick(film.id)}>
                {film.title}
                </li>
              ))}
            </ul>
          )
        }
      </Query>
      {pickedMovieId ? <CurrentMovie id={pickedMovieId} /> : undefined}
    </React.Fragment>
  );
};

export default Movies;
