
export type PokemonContext = {
    pokemons: any | undefined
    getPokemonApi: () => void
    pokesNames: any | undefined
    pokemonsDatas: any | undefined
    getPokemonsByName: () => void
    selectedPokemon: any | undefined
    getSelectedItem: (item: string) => void
}