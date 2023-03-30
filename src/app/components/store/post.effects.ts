import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from "rxjs";
import { PostService } from "../post/service/post.service";
import { invokeFetchPostSucess, invokePostAPI, savePostAPISucess, savePostAPI, deletePostAPI, deletePostAPISucess } from './post.action';
import { Injectable } from '@angular/core';
import { AppState } from "../share/store/app-state";
import { Store, select } from '@ngrx/store';
import { setApiStatus } from "../share/store/app.action";
import { postSelect } from './post.selector';

@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postService: PostService,
        private appStore: Store<AppState>,
        private store: Store) { }

    loadAllPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(invokePostAPI),
            withLatestFrom(this.store.pipe(select(postSelect))),
            switchMap(([, postFormStore]) => {
                if(postFormStore.length > 0){
                    return EMPTY;
                }
                return this.postService.getPosts()
                    .pipe(
                        map((data) => invokeFetchPostSucess({ allPosts: data })));
            }),
        )
    );


    savePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(savePostAPI),
            switchMap((action) => {
                this.appStore.dispatch(setApiStatus({ apiStatus: { apiStatus: 'loading', apiResponseMessage: '' } }))
                return this.postService.savePost(action.post)
                    .pipe(map((data) => {
                        this.appStore.dispatch(setApiStatus({ apiStatus: { apiStatus: 'success', apiResponseMessage: 'Post saved successfully' } }))
                        return savePostAPISucess({ response: data });
                    }))
            }),
        )
    )


    deletePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deletePostAPI),
            switchMap((action) => {
                this.appStore.dispatch(setApiStatus({ apiStatus: { apiStatus: 'loading', apiResponseMessage: '' } }))
                return this.postService.deletePost(action.id)
                    .pipe(map((data) => {
                        this.appStore.dispatch(setApiStatus({ apiStatus: { apiStatus: 'success', apiResponseMessage: 'Post saved successfully' } }))
                        return deletePostAPISucess({ id: action.id });
                    }))
            }),
        )
    )
};