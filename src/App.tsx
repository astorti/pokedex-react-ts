import { PokemonProvider } from './context/pokemonProvider';
import { PokemonCard } from './components/PokemonCard';
function App() {

  return (
    
    <PokemonProvider>
      <PokemonCard />  
    </PokemonProvider>
  );
}

export default App;
