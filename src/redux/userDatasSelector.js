import { createSelector } from "reselect";

export const getUsersData = (state) => {
    return state.user;
}