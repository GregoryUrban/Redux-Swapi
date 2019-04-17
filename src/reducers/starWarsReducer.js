import { FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE } from "../actions";

// export const FETCH_PEOPLE_START = "FETCH_PEOPLE_START"
// export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS"
// export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE"



const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: null,
  next: null,
  previous: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_PEOPLE_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state, 
        characters: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
        isFetching: false,
        error: null
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,

      }
    default:
      return state;
  }
};

// export default starWarsReducer
