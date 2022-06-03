import axios from "axios";

export const api = axios.create({
    baseURL : 'http://164.92.71.164/api/v1'
})