import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "../post/interface/post";

export const postSelect = createFeatureSelector<Post[]>("myposts");

/*export const selectPostsById = (postId: number) => {
    return createSelector(postSelect,(post: Post[]) => {
        let postById = post.filter((post) => post.id === postId);

        if(postById.length == 0){
            return null;
        }
        return postById[0];
    });
};*/