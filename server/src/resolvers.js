// import data from './data.json';
import {data as db} from './data';
import uuid from 'uuid/v4';

const resolvers = {
    Query: {
      users: (_parent, {limit}) => typeof limit === "number"
        ? data.users.slice(0, limit)
        : data.users,
      articles: (_parent, {search}) => data.articles.filter((article) => article.title.includes(search.searchTerm)),
      greeting: (_parent, { name }) => name
        ? `Hello ${name}!`
        : 'Hello World',
      sum: (_parent, {numbers}) => numbers.reduce((acc, number) => acc + number , 0)
    },
    User: {
      articles: (parent) => data.articles.filter(article => article.userId === parent.id)
    },
    Article: {
      author: (parent) => data.users.find(user => user.id === parent.userId)
    },

    Mutation: {
      createUser: (_parent, { data }) => {
        const newUser = {
          id: uuid(),
          ...data,
        }
        if(db.users.find((user) => user.email === data.email)) {
          throw new Error("Email already exists");
        }
        db.users.push(newUser);
        return newUser;
      },
      updateUser: (_parent, {id, data}) => {
        console.log(id, data);
        
        const userIndex = db.users.indexOf(user => user.id === id);
        if(userIndex < 0) {
          throw new Error("User does not exist")
        }
        const updatedUser = {
          ...db.users[userIndex],
          ...data,
        }
        console.log(updatedUser);
        
        db.users[userIndex] = updatedUser;
        return updatedUser;
      }
    }
  };
  
  export default resolvers;