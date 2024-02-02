import { Header } from "../../components/Header"
import { Container } from "./styled"
import { Search } from "../../components/Search";


export const StartPage = () => {

    return (
        <Container>
            <h1 style={{color: 'white'}}>Welcome to</h1>
            <Header />
            <Search />
        </Container>
    )
}