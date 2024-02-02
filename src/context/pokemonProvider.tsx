import { createContext, useState, FC, ReactNode } from "react"
import { PokemonContext } from "../types/pokemon"
import { api } from "../services/api"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const contextProvider: PokemonContext = {
    pokemons: [],
    getPokemonApi: () => { },
    pokesNames: [],
    pokemonsDatas: [],
    getPokemonsByName: () => { },
    selectedPokemon: [],
    getSelectedItem: () => {},
}

export const Context = createContext<PokemonContext>(
    contextProvider
)

export const PokemonProvider: FC<{children: ReactNode}> = ({ children }) => {
    
    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState<any[]>([])
    const [pokesNames, setPokesNames] = useState([])
    const [pokemonsDatas, setPokemonsDatas] = useState<any | undefined>([])
    const [selectedPokemon, setSelectedPokemons] = useState<any | undefined>([])

    const getPokemonApi = async () => {
        try {
            const getPokemons = await api.get(``)
            const newPoke: any = []
            setPokemons(getPokemons.data.results.map((poke: any) => {
                newPoke.push(poke.name)
                return (
                    setPokesNames(newPoke)
                )
            }))
            getPokemonsByName()
            console.log(pokemonsDatas.length, selectedPokemon.length)
        } catch (error) {
            console.log("Falha ao conectar com api", error)
        }
        
    }

    const getPokemonsByName = async () => {
        try {
            const newPoke: any = []
            for (let i = 0; i < pokesNames.length; i++){
                let name: string = pokesNames[i]
                const url: string = `https://pokeapi.co/api/v2/pokemon/${name}`
                const getPokemons = await axios.get(url)
                newPoke.push(getPokemons.data)
                setPokemonsDatas(newPoke)
            }
        } catch (error) {
            console.log("Falha ao conectar com api", error)
        }
    }

    const getSelectedItem = (search: string) => {
        getPokemonApi()
        let newList: any = []
        if (search !== '' ){
            for (let i in pokemonsDatas) {
                if (search === pokemonsDatas[i].name || search === pokemonsDatas[i].types[0].type.name) {
                    newList.push(pokemonsDatas[i])
                }    
            }
            setSelectedPokemons(newList)
        } else {
            setSelectedPokemons(pokemonsDatas)
        }        
        navigate('/list')
    }

    return (
        <Context.Provider
            value={{pokemons, getPokemonApi, pokesNames, getPokemonsByName, pokemonsDatas, selectedPokemon, getSelectedItem}}
        >
            {children}
        </Context.Provider>
    )
}