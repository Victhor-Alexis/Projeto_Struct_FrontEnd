import axios from "axios";

export const image = axios.create({
    baseURL : 'https://padoca.ml'
})