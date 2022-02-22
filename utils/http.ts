import axios, { AxiosInstance } from "axios";

const instanceAxios = axios.create({
    baseURL: "http://localhost:3001/",
})

export default instanceAxios