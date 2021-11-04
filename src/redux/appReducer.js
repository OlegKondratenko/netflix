const SET_FETCHING = 'SET-FETCHING'
const APP_SET_LINK = 'SET-LINK'

let initState = {
    isFetching: false,
    memoLink: '',
}

let appReducer = (state = initState, action) => {
    switch (action.type) {
        case APP_SET_LINK:
            return {
                ...state,
                memoLink: action.memoLink
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching })
export const memoLink = (memoLink) => ({ type: APP_SET_LINK, memoLink: memoLink })

export default appReducer;