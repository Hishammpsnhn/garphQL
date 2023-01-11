import Books from "./components/Books";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddBook from "./components/AddBook";

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <h1>Books</h1>
      <ApolloProvider client={client}>
        <Books />
        <AddBook/>
      </ApolloProvider>
    </div>
  );
}

export default App;
