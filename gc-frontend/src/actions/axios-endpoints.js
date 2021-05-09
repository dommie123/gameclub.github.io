import axios from 'axios';

export const GameClubDB = axios.create({
    baseURL: "http://localhost:9027"
});

export const PokeAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
})