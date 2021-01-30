import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

//Pages
import PokemonList from './PokemonList/App';


const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MobileView>
      <main id='container' style={{background:'whitesmoke', width:'100%', height:'100%'}}>
        <Switch>
          <Route path="/" exact render={() => <PokemonList />} />
        </Switch>
      </main>
      </MobileView>
    </BrowserRouter>
  </ApolloProvider>
);

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
})

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
