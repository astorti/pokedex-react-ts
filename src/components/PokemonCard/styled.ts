import styled from "styled-components";

export const Title = styled.p`
    font-size: 80px;
    margin-top: 50px; 
    margin-bottom: 50px;
    text-decoration: underline;
    font-family: sans-serif;
    font-weight: bolder;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    border: 2px solid white;
    border-radius: 10px;
    margin-bottom: 20px;
    width: 70%;
    padding: 1%;
    cursor: pointer;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
`

export const CardTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding-right: 40%;
    padding-left: 10%;
`

export const NumberId = styled.div`
    display: flex;
    flex-direction: row;
`

export const PokemonImage = styled.img`
    width: 80px;
`