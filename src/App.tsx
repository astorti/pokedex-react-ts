import { PokemonProvider } from './context/pokemonProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StartPage } from './pages/StartPage';
import { PokemonListPage } from './pages/PokemonListPage';


function App() {

  return (
    <Router>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/list" element={<PokemonListPage />} />
        </Routes>
      </PokemonProvider>
    </Router>
    
  );
}

export default App;
