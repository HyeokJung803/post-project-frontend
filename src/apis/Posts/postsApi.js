import { api } from "../config/axiosConfig"

export const createPost = (formdata) => {
    return api.post("/api/posts", formdata);
}

export const getFeeds = (params) => {
    return api.get("/api/posts/feeds", {params})
}