import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
import headerReducer from "./headerReducer";
import authReducer from "./authReducer";
import showsReducer from "./videosReducer";

let reducers = combineReducers({
    app: appReducer,
    header: headerReducer,
    authentication: authReducer,
    videos: showsReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)))

window.__store__ = store;
export default store;

