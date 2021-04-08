import {axios} from 'axios';

export const GameClubDB = axios.create({
    baseURL: "https://localhost:8080"
});

export const PokeAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
})