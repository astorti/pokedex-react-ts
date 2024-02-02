import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    border: 2px solid white;
    border-radius: 5px;
    margin-bottom: 20px;
    width: 60%;
    padding: 1%;
    cursor: pointer;

    &:hover {
        padding-top: 5%;
        padding-bottom: 5%;
        padding-left: 2%;
        padding-right: 2%;
        border-radius: 20px;
        border: 3px solid yellow;
        margin-top: 40px;
        margin-bottom: 50px;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;

    ${Container}:hover & {
        margin-top: -30px;
    }
`

export const CardTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding-right: 10%;
    padding-left: 10%;
    height: 100px;

    ${Container}:hover & {
        margin-top: 50px;
    }
`

export const NumberId = styled.div`
    display: flex;
    flex-direction: row;
`

export const PokemonImage = styled.img`
    width: 50px;
    ${Container}:hover & {
        width: 90px;
    }
`

export const Name = styled.h1`
    ${Container}:hover & {
        font-style: oblique;
        font-size: 28px;
        text-transform: uppercase;
        color: #FFF
    } 
        
`