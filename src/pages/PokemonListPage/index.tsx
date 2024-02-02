import { Header } from "../../components/Header";
import { PokemonCard } from '../../components/PokemonCard';
import { Search } from "../../components/Search";
import { Container, SearchArea } from "./styled";
import { useNavigate } from "react-router-dom";

export const PokemonListPage = () => {

    const navigate = useNavigate()

    const returnToStartPage = () => {
        navigate('/')
    }

    return (
        <Container>
            <Header />
            <SearchArea>
                <Search />
                <button onClick={returnToStartPage}
                    style={{
                        backgroundColor: 'gray',
                        color: 'white',
                        padding: '2px 10px',
                        borderWidth: '1px',
                        borderColor: 'white',
                        borderRadius: '3px',
                        cursor: 'pointer'
                    }}>Back</button>
            </SearchArea>
            <PokemonCard />
        </Container>
    )
}
