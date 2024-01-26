import axios from "axios";

export const JsonPlaceholderAPI = axios.create({
    baseURL: "https://dummyjson.com/posts/",
})

