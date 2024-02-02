import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    margin-left: 0px;
    margin-bottom: -80px;
`

export const Card = styled.div`
    height: 65%;
    width: 30%;
    border: 2px solid black;    
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    margin-right: 150px;
`

export const Informations = styled.div`
    flex-direction: column;
    margin: auto;
    width: 75%;
    justify-content: space-around;
    align-items: start;
`

export const Name = styled.h1`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 70px;
`

export const Text = styled.h3`
    text-align: left;
    margin: 20px auto 20px;
    padding: 5px;
    padding-left: 15px;
    width: 60%;
    
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-bottom-left-radius: 10px;
`

export const ButtonContainer = styled.div`
    width: 50px;
    margin: auto;
    color: #FFF;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const Button = styled.button`
    border: 2px solid yellow;
    border-radius: 3px;
    color: yellow;
    padding: 5px;
    cursor: pointer;
`