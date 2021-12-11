import axios from "axios";

export const image = axios.create({
    baseURL : 'http://localhost:3000'
})