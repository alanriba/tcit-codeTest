import { createAction, props } from "@ngrx/store";
import { Post } from "../post/interface/post";

export const invokePostAPI = createAction(
"[Post API] Invoke API",
)

export const invokeFetchPostSucess = createAction(
"[Post API] post fetch api success",
props<{allPosts: Post[]}>()
)

export const savePostAPI = createAction(
    "[Post API] post save api",
    props<{post: Post}>()
)

export const savePostAPISucess = createAction(
    "[Post API] post save api success",
    props<{response: Post}>()
)

export const deletePostAPI = createAction(
    "[Post API] post delete api",
    props<{id: number}>()
)

export const deletePostAPISucess = createAction(
    "[Post API] post delete api success",
    props<{id: number}>()
)