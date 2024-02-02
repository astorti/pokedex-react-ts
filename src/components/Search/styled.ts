import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 40px;
    width: 600px;
`

export const TextSearch = styled.p`
    color: yellow;
`

export const Input = styled.input`
    border: 1px solid yellow;
    border-radius: 3px;
    width: 95%;
    padding: 2px;
    padding-left: 5px;
    margin: 0 15px;
    color: #FFF;
`

export const Button = styled.button`
    color: black;
    background-color: yellow;
    padding: 3px;
    width: 90px; 
    border-radius: 5px; 
    cursor: pointer;
`