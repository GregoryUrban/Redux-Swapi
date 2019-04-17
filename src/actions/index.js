// ACTIONS
import axios from "axios"
export const FETCH_PEOPLE_START = "FETCH_PEOPLE_START"
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS"
export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE"

// export const FETCH_SPECIES_START = "FETCH_SPECIES_START"
// export const FETCH_SPECIES_SUCCESS = "FETCH_SPECIES_SUCCESS"
// export const FETCH_SPECIES_FAILURE = "FETCH_SPECIES_FAILURE"

// we'll need to create 3 different action types here. -DONE
// one for fetching, one for success and one for failure -DONE

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getPeople = (
  target = "https://swapi.co/api/people/"
) => dispatch => {
  dispatch({ type: FETCH_PEOPLE_START });
  axios(target)
    .then(res => dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: FETCH_PEOPLE_FAILURE, error }));
};


// export const getSpecies = (
//   target = "https://swapi.co/api/species/"
// ) => dispatch => {
//   dispatch({ type: FETCH_SPECIES_START });
//   axios(target)
//     .then(res => dispatch({ type: FETCH_SPECIES_SUCCESS, payload: res.data }))
//     .catch(error => dispatch({ type: FETCH_SPECIES_FAILURE, error }));
// };

  // ACTIONS
  