import axios from "axios";

export const api = axios.create({
    baseURL : 'https://padoca.ml/api/v1'
})