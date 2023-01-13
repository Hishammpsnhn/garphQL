import { gql } from "@apollo/client";

const GET_Books = gql`
  query GetBooks {
    books {
      id
      name
    }
  }
`;

const GET_Author = gql`
query GetAuthors {
  authors {
    id
    name
  }
}
`;


const ADD_Books = gql`
    mutation AddBooks($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;



export { GET_Books, GET_Author,ADD_Books };