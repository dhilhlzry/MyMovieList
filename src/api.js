import axios from "axios";

export const getMovieList = async() => {
    const movie = await axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/movie/popular?page=1&api_key=${import.meta.env.VITE_REACT_APP_APIKEY}`)
    // console.log({movieList: movie})
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/search/movie?query=${q}&page=1&api_key=${import.meta.env.VITE_REACT_APP_APIKEY}`)
    return search.data
}

export const getDetailMovie = async(id) => {
    const detail = await axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/movie/${id}?page=1&api_key=${import.meta.env.VITE_REACT_APP_APIKEY}`)
    return detail.data
}

