import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { Store } from '@ngrx/store';
import { savePostAPI } from '../../store/post.action';
import { AppState } from '../../share/store/app-state';
import { selectAppState } from '../../share/store/app.selector';
import { setApiStatus } from '../../share/store/app.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  constructor(private store: Store, private appStore: Store<AppState>) {
  }

  postForm: Post={
    id: 0,
    title: '',
    description: ''
  }

  ngOnInit(): void {
  };

  save(){
    this.store.dispatch(savePostAPI({post: {...this.postForm}}));
    let appStatus$ = this.appStore.select(selectAppState);
    appStatus$.subscribe((data) => {
      if(data.apiStatus === 'success'){
        this.appStore.dispatch(setApiStatus({apiStatus:{ apiStatus: '', apiResponseMessage:''}}));
    }
    });
  }
}
