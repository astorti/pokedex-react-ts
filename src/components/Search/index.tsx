import { Container, Input, TextSearch, Button } from "./styled"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/pokemonProvider"

export const Search = () => {

    const { getSelectedItem } = useContext(Context)
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
    }, [getSelectedItem])

    return (
        <Container>
            <TextSearch>Search</TextSearch>
            <Input onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Pokemon type or pokemon name or empty for complete list"/>
            <Button onClick={() => getSelectedItem(search)}>Search</Button>
        </Container>
    )
}