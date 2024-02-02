import axios from "axios";

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'
})