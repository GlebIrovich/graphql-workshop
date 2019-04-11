import { gql } from "apollo-boost"

export const AllFilms = gql`
  query { 
    allFilms { 
      films { 
        id 
        title 
      } 
    } 
  }
`;

export const AllPeople = gql`
  query {
    allPeople{
      people{
        name
      }
    }
  }
`;

export const AllSpecies = gql`
  query allSpecies($first: Int) {
    allSpecies(first: $first){
      species{
        name
        id
      }
    }
  }
`;

export const AllPlanets = gql`
  query allPlanets($first: Int) {
    allPlanets(first: $first){
      planets{
        name
        id
      }
    }
  }
`;

export const GetMovie = gql`
  query film($id: ID){ 
    film(id: $id) { 
        id
        title
        director
        releaseDate
    } 
  }
`;
