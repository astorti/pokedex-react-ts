import { Button, ButtonContainer, Card, Container, ImageContainer, Informations, Name, Text } from "./styled"
import { useContext } from "react"
import { Context } from "../../context/pokemonProvider"
import "../../pokemonColorType.css"
import { Pokemon } from "../../types/pokemon"
import { useNavigate } from "react-router-dom"

export const PokemonDetailsPage = () => {

    const { pokemonDetail } = useContext(Context)
    const navigate = useNavigate()

    let abilitie2: string = "----"
    try {
        if (pokemonDetail.abilities[1].ability.name) {
            abilitie2 = pokemonDetail.abilities[1].ability.name
        }
    } catch (error) {
        console.log(error)
    }

    let pokemon: Pokemon = {
        name: pokemonDetail.name,
        type: pokemonDetail.types[0].type.name,
        front: pokemonDetail.sprites.front_default,
        back: pokemonDetail.sprites.back_default,
        dream: pokemonDetail.sprites.other.dream_world.front_default,
        base_experience: pokemonDetail.base_experience,
        abilitiesOne: pokemonDetail.abilities[0].ability.name,
        abilitiesTwo: abilitie2,
        weight: pokemonDetail.weight
    }

    const backToListPage = () => {
        navigate('/list')
    }
    
    return (
        <>
            <Container>
                <img style={{width: 450}} src={pokemon.dream} alt="" />
                <Card className={pokemon.type}>
                    <Informations className={pokemon.type}>
                        <Name className={pokemon.type}>{pokemon.name.toUpperCase()}</Name>
                        <Text className={pokemon.type}>Type: {pokemon.type}</Text>
                        <Text className={pokemon.type}>Abilitie: {pokemon.abilitiesOne}</Text>
                        <Text className={pokemon.type}>Abilitie: {pokemon.abilitiesTwo}</Text>
                        <Text className={pokemon.type}>Base experience: {pokemon.base_experience}</Text>
                        <Text className={pokemon.type}>Weight: {pokemon.weight}</Text>
                        <ImageContainer className={pokemon.type}>
                            <img className={pokemon.type} src={pokemon.front} alt="" />
                            <img className={pokemon.type} src={pokemon.back} alt="" />
                        </ImageContainer>
                    </Informations>
                </Card>
            </Container>
            <ButtonContainer>
                <Button onClick={backToListPage}>Back</Button>
            </ButtonContainer>
        </>
    )
}