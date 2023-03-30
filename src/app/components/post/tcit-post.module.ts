import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TcitPostComponent } from './tcit-post.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../store/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '../store/post.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TcitPostComponent, AddPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    StoreModule.forFeature('myposts', postReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
  exports: [TcitPostComponent]
})
export class TcitPostModule { }
