import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/pokemonProvider";
import { Card, CardTwo, Container, Main, Name, NumberId, PokemonImage } from "./styled";
import './style.css'

export const PokemonCard = () => {

    const { getPokemonApi, selectedPokemon } = useContext(Context)
    const [pokemonList, setPokemonList] = useState<any>([])

    useEffect(() => {
        getPokemonApi() 
        setPokemonList(selectedPokemon)
    }, [selectedPokemon])
    
    const firstLetterNameToUpperCase = (name: string) => {
        var newName = name[0].toUpperCase() + name.slice(1)
        return newName
    }

    return (
        <Main>
            {pokemonList.length === 0
                ? <p style={{ color: 'red' }}>The selected pokemons did not load or it doesn't exist. Please try again!!</p>
                : pokemonList.map((pokemon: any) => {
                    let type = pokemon.types[0].type.name
                    let image:any = pokemon.sprites.other.dream_world.front_default
                    return (
                        <Container className={type}>
                            <Card className={type}>
                                <NumberId className={type}>
                                    <p className={type}>{ pokemon.id }</p>
                                </NumberId>
                                <CardTwo className={type}>
                                    <div className={type}>
                                        <PokemonImage className={type} src={image} alt="pokemonImage" />
                                        <p style={{ textAlign: 'center' }} className={type}>{type}</p>
                                    </div>
                                    <Name className={type} key={pokemon.id}>{firstLetterNameToUpperCase(pokemon.name)}</Name>        
                                </CardTwo>
                            </Card>
                        </Container>
                    )
                })
            }
        </Main>
    )
}
