import axios from "axios";
import { URL_POKE_API } from "../constants/pokemon";

export const api = axios.create({
    baseURL: URL_POKE_API
})