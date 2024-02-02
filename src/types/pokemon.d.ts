export type PokemonContext = {
    pokemons: any | undefined
    getPokemonApi: () => void
    pokesNames: any | undefined
    pokemonsDatas: any | undefined
    getPokemonsByName: () => void
    selectedPokemon: any | undefined
    getSelectedItem: (item: string) => void
    pokemonDetail: any | undefined
    getDetailedPokemon: (item: number) => void
}

export type Pokemon = {
    name: string
    type: string
    front: any | undefined
    back: any | undefined
    dream: any | undefined
    base_experience: number
    abilitiesOne: string
    abilitiesTwo: string
    weight: number
}