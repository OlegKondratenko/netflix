import Axios from "axios";


const tvMaze = Axios.create({
    baseURL: "https://api.tvmaze.com/",
    headers: {
    }
})
export const MoviesAPI = {
    getShowsList: (query = {}) => {
        const queryStr = `shows${query.embed ? `/embed=${query.embed}` : ''}`
        return tvMaze.get(queryStr)
    }
}
