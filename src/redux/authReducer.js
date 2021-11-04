import { stopSubmit } from "redux-form";
import { AuthAPI } from "../Api/Api";
const LOG_IN = "LOG-IN"
const SET_USER_DATA = 'SET-USER-DATA';
const LOG_OUT = "LOG-OUT";

let initState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}
let authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...action.data,
                isAuth: action.data.isAuth,
                id: action.data.id,
                login: action.data.login,
                email: action.data.email
            }
        case LOG_IN:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })
export const loggedIn = () => ({ type: LOG_IN, isAuth: true })

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





export default authReducer;
