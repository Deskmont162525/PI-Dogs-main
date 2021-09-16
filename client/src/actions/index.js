import axios from 'axios';
import {
    DOGS_URL,
    TEMPERAMENT_URL,
    RAZAS_URL,
    DOGS_SEARCH_URL,
    DOGS_RAZA_ID_URL,
    DOG_ADD_URL
} from '../constants';

import {
    GET_DOGS,
    GET_TEMPERAMENTS,
    GET_RAZAS,
    GET_DOGS_SEARCH,
    GET_DOGS_DETAIL_RAZA,
    GET_CLEANAP_DOGS,
    GET_CLEANAP_DOGS_BY_ID
} from './constants';

export function getDogs(){
    return function (dispatch) {
        return axios.get(DOGS_URL)
        .then((dogs) => {
            dispatch({
                type: GET_DOGS,
                payload: dogs.data
            })
        })
    }
};



export function getTemperaments(){
    return function (dispatch) {
        return axios.get(TEMPERAMENT_URL)
        .then((temperaments) => {
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: temperaments.data
            })
        })
    }
};

export function  getRazas() {
    return function (dispatch) {
        return axios.get(RAZAS_URL)
        .then((razas) => {
            dispatch({
                type: GET_RAZAS,
                payload: razas.data
            })
        })
        
    }    
};

export function getDogsByName(q) {
    return function (dispatch) {
        return axios.get(DOGS_SEARCH_URL + q)
        .then((dogsName) => {
            dispatch({
                type: GET_DOGS_SEARCH,
                payload: dogsName.data
            })
        });
        
    }    
};

export function getDogsById(q) {
    return function (dispatch) {
        return axios.get(DOGS_RAZA_ID_URL + q)
        .then((dogId) => {
            dispatch({
                type: GET_DOGS_DETAIL_RAZA,
                payload: dogId.data
            })
        })
    }
};

export async function postDogAdd(data) {

    await axios.post(DOG_ADD_URL, data);
   
};

export const cleanUp = () => ({ type: GET_CLEANAP_DOGS});
export const cleanUpId = () => ({ type: GET_CLEANAP_DOGS_BY_ID});

export const imagesArray = [{name: "imagen-1", url:"http://pm1.narvii.com/6828/69268fc31ce472e09837177a1c1a2379ee555c9dv2_00.jpg"},
{name: "imagen-2", url:"https://img.youtube.com/vi/5cljBwW6VFY/hqdefault.jpg"},
{name: "imagen-3", url:"https://www.lovely-dogs.com/image/pet1_5/14-of-the-coolest-comic-books-starring-dogs-14.jpg"},
{name: "imagen-4", url:"https://http2.mlstatic.com/D_NQ_NP_953031-MCO44032410817_112020-O.jpg"},
{name: "imagen-5", url:"https://pm1.narvii.com/6349/6fd62d416c6d9d48c148f70ca5619fce14f8c55f_hq.jpg"},
{name: "imagen-6", url:"https://i.pinimg.com/originals/3d/2d/fe/3d2dfe3989fc46fdcc56bc8676f4bff1.jpg"}]