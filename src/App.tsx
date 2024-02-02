import { PokemonProvider } from './context/pokemonProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StartPage } from './pages/StartPage';
import { PokemonListPage } from './pages/PokemonListPage';
import { PokemonDetailsPage } from './pages/PokemonDetailsPage';


function App() {

  return (
    <Router>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/list" element={<PokemonListPage />} />
          <Route path="/detail" element={<PokemonDetailsPage />} />
        </Routes>
      </PokemonProvider>
    </Router>
    
  );
}

export default App;
