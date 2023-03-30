import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { postSelect } from '../store/post.selector';
import { deletePostAPI, invokePostAPI } from '../store/post.action';
import { AppState } from '../share/store/app-state';
import { setApiStatus } from '../share/store/app.action';
import { selectAppState } from '../share/store/app.selector';

declare var window: any;


@Component({
  selector: 'app-tcit-post',
  templateUrl: './tcit-post.component.html',
  styleUrls: ['./tcit-post.component.scss'],
})
export class TcitPostComponent implements OnInit, OnDestroy {

  constructor(private storePost: Store, private appStore: Store<AppState>) {
    // Assign the data to the data source for the table to render
  }
  posts$ = this.storePost.pipe(select(postSelect));
  deleteModal: any;
  idPostDelete: number = 0;



  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   
  }

  ngOnInit(): void {
    this.deleteModal = new window.$('#deleteModal');
    this.storePost.dispatch(invokePostAPI());
  }

  ngOnDestroy(): void {
    this.posts$.subscribe().unsubscribe();
  }

  eliminar(id: any) {
    this.idPostDelete = id;
    this.deleteModal.modal('show');
  }

  delete() {
    this.storePost.dispatch(deletePostAPI({ id: this.idPostDelete }));

    let appStatus$ = this.appStore.pipe(select(selectAppState));

    appStatus$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(setApiStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } }));
        this.deleteModal.modal('hide');
      }
    });
  }
}
