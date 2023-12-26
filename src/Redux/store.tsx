import { Action, AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';


// При configureStore redux-thunk и redux-dev-tools применяеются по дефолту
const store = configureStore({
    reducer: rootReducer
});


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignores
window.store = store;


// Infer the RootState and AppDispatch types from the store itself
export type TState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TDispatch = typeof store.dispatch;
// https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks
type ThunkAction<
    R, // Return type of the thunk function
    S, // state type used by getState
    E, // any "extra argument" injected into the thunk
    A extends Action // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R;
export type TThunkAction<ReturnType = void> = ThunkAction<ReturnType, TState, unknown, AnyAction>;


export { store };