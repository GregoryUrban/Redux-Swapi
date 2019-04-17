// ACTIONS
import axios from "axios"
export const FETCH_PEOPLE_START = "FETCH_PEOPLE_START"
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS"
export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE"

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


// export const getPeople = () => dispatch => {    // dispatch a "start" action
//     console.log("In getPeople Action before .get")
//     dispatch({ type: FETCH_PEOPLE_START })    // then... start the API call
//     axios
//       .get(
//         `https://swapi.co/api/people/`
//       )
//       .then(res => {
//         console.log(res.data.results)
//         dispatch({
//           type: FETCH_PEOPLE_SUCCESS,
//           payload: res.data
//         })
//       })
//       .catch(err => {
//         dispatch({
//           type: FETCH_PEOPLE_FAILURE,
//           payload: err
//         })
//       })
//   }

  // ACTIONS
  