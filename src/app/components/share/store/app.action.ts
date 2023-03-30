import { createAction, props } from '@ngrx/store';
import { AppState } from './app-state';

 export const setApiStatus = createAction(
    '[App] Set Api Status - sucess or failure status',
    props<{ apiStatus: AppState }>()
 )