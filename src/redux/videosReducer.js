import { MoviesAPI } from "../Api/Api";
import { setFetching } from "./appReducer";

const SET_MOVIES = 'SET_MOVIES'

let initState = {
    shows: [],
    favourite: [],
}
let showsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                shows: [].concat(...action.shows)
            }

        default:
            return state;
    }
}

export const setShowsAction = (shows) => ({ type: SET_MOVIES, shows })

export const getShowsThunk = (query) => {
    return async (dispatch) => {
        dispatch(setFetching(true))
        const res = await MoviesAPI.getShowsList(query)
        console.log('responce', res)
        if (res.status === 200) {
            dispatch(setShowsAction(res.data))
        } else {

        }
        dispatch(setFetching(false))
    }
}
// export const SignInThunk = (signUpFormData) => {
//     let { email, password } = { ...signUpFormData }

//     return async (dispatch) => {
//         let response = await AuthAPI.signIn({ email, password })
//         console.log('responce from firebase', response.message)
//         if (response.resultCode === 200) {
//             dispatch(setAuthDataThunk())
//         } else {
//             let formAction = stopSubmit('login', { _error: response.message || "Cant create user" });
//             dispatch(formAction);
//         }
//     }
// }





export default showsReducer;
