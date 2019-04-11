import React from "react";
import { Query } from "react-apollo";
import { GetMovie } from "./queries";

const CurrentMovie = ({ id }) => {
  return (
    id &&
    <Query query={GetMovie} variables={{ id }}>
      {({ loading, data }) => loading ? (
          <p>Loading ...</p>
        ) : (
          <span>{data ? data.film.title : 'Nothing is found'}</span>
        )
      }
    </Query>
  );
};

export default CurrentMovie;
