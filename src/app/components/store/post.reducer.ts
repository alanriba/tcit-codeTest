import { createReducer, on } from "@ngrx/store";
import { Post } from "../post/interface/post";
import { deletePostAPISucess, invokeFetchPostSucess, savePostAPISucess } from './post.action';

export const initialState: ReadonlyArray<Post> = [];

export const postReducer = createReducer(
    initialState,
    on(invokeFetchPostSucess, (state, { allPosts }) => {
        return allPosts;
    }),
    on(savePostAPISucess, (state, { response }) => {
        let newState = [...state];
        newState.unshift(response);
        return newState;
    }),
    on(deletePostAPISucess, (state, { id }) => {
        return state.filter((post) => post.id !== id);
    })
);