import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from './types';
import APIKey from '../Api';
import axios from 'axios';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text,
    });
};

export const fetchMovies = text => dispatch => {
  axios.get(`http://www.omdbapi.com/?apikey=${APIKey.APIKey}&s=${text}`)
        .then(response => {
            console.log(response.data,text)
            dispatch({
            type: FETCH_MOVIES,
            payload: response.data
        })})
        .catch(err => console.log(err))
}

export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey.APIKey}&i=${id}`)
        .then(response => dispatch({
            type: FETCH_MOVIE,
            payload: response.data
        }))
        .catch(err => console.log(err))
}

export const setLoading = () => {
    return {
        type: LOADING,
    }
}
