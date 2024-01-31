import { useContext, useEffect } from "react";
import { Context } from "../../context/pokemonProvider";
import { Card, CardTwo, Container, Main, NumberId, PokemonImage, Title } from "./styled";
import './style.css'

export const PokemonCard = () => {

    const { pokemonsDatas, getPokemonApi } = useContext(Context)

    useEffect(() => {
        getPokemonApi()    
    },[])

    return (
        <Main>
            <div onClick={getPokemonApi}>
                <Title>POKEDEX</Title>
            </div>
            {pokemonsDatas.map((pokemon: any) => {
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
                                </div>
                                <h1 className={type} key={pokemon.id}>{pokemon.name}</h1>        
                            </CardTwo>
                        </Card>
                    </Container>
                )
            })}
        </Main>
    )
}
