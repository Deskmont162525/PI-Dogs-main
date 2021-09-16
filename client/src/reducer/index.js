import {
    GET_DOGS,
    GET_TEMPERAMENTS,
    GET_RAZAS,
    GET_DOGS_DETAIL_RAZA,
    GET_DOGS_SEARCH,
    GET_CLEANAP_DOGS,
    GET_CLEANAP_DOGS_BY_ID
} from '../actions/constants'

var initialState = {
    dogs: [],
    dogRasasId: [],
    temperaments: [],
    razas : [],
    dogsName : []
  }

  export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case GET_RAZAS:
            return {
                ...state,
                razas: action.payload
            }
        case GET_DOGS_DETAIL_RAZA:
            return {
                ...state,
                dogRasasId: action.payload
            }
        case GET_DOGS_SEARCH:
            return {
                ...state,
                dogsName: action.payload
            }
        case GET_CLEANAP_DOGS:
            return {
                ...state,
                dogs: []
            }
        case GET_CLEANAP_DOGS_BY_ID:
            return {
                ...state,
                dogRasasId: []
            }
        default: return state
    }
  }