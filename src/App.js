import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';


//Pages
import PokemonList from './pages/PokemonList/App';
import PokemonDetail from './pages/PokemonDetail/App'
import MyPokemon from './pages/MyPokemon/App'
import MyPokemonDetail from './pages/MyPokemonDetail/App'

//Function
import { GlobalProvider } from './context/GlobalState';
// import MyPokemonMobile from './pages/MyPokemon/Mobile';
// import MyPokemonDetailMobile from './pages/MyPokemonDetail/Mobile';
import StickyBottom from './component/StickyBottom';
import StickyTop from './component/StickyTop';
// import StickyTop from './component/StickyTop';


const App = (props) => (
  <GlobalProvider>

    <MobileView>
      {/* <StickyTop /> */}
      <main id='container-out' style={{background:'white', width:'100%', height:'100%'}}>
        <Switch>
          <Route path="/" exact render={(props) => <PokemonList {...props}  />} />
          <Route path="/pokemon-detail" exact render={(props) => <PokemonDetail {...props} />} />
          <Route path="/my-pokemon" exact render={(props) => <MyPokemon {...props} />} />
          <Route path="/my-pokemon-detail" exact render={(props) => <MyPokemonDetail {...props} />} />
        </Switch>
      </main>
      <StickyBottom />
    </MobileView>
    <BrowserView>
      <StickyTop />
      <main id='container-out' style={{background:'white', width:'100%', height:'100%'}}>
        <Switch>
          <Route path="/" exact render={(props) => <PokemonList {...props} />} />
          <Route path="/pokemon-detail" exact render={(props) => <PokemonDetail {...props} />} />
          <Route path="/my-pokemon-detail" exact render={(props) => <MyPokemonDetail {...props} />} />
          <Route path="/my-pokemon" exact render={(props) => <MyPokemon {...props} />} />
        </Switch>
      </main>
    </BrowserView>
  </GlobalProvider>
);

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
