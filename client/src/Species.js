import React from "react";
import { Query } from "react-apollo";
import { AllSpecies } from "./queries";

const Species = () => {
  return (
    <Query query={AllSpecies} variables={{ first: 3 }}>
      {({ loading, data }) => (loading ? (
          <p>Loading ...</p>
        ) : (
          <ul>
            {data.allSpecies.species.map(species => (
              <li key={species.id}>{species.name}</li>
            ))}
          </ul>
        ))
      }
    </Query>
  );
};

export default Species;
