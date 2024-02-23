import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.1.111:8000/api/v1",
    withCredentials: true,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})