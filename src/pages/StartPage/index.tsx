import { Header } from "../../components/Header"
import { Container } from "./styled"
import { Search } from "../../components/Search";
import logo from "../../assets/React_Logo.png"
import { useContext, useEffect } from "react";
import { Context } from "../../context/pokemonProvider";

export const StartPage = () => {

    const { getPokemonApi } = useContext(Context)

    useEffect(() => {
        getPokemonApi()
    }, [])

    return (
        <Container>
            <h1 style={{color: 'white'}}>Welcome to</h1>
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: "-50px",
                marginBottom: "50px"
            }}>
                <p style={{ color: "rgb(8 126 164)"}}>
                    Made with React 
                </p>
                <img style={{width: "20px", marginLeft: "5px"}} src={logo} alt="" />
            </div>
            <Search />
        </Container>
    )
}