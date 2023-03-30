import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TcitPostModule } from 'src/app/components/post/tcit-post.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    HomeRoutingModule,
    TcitPostModule
  ], 

})
export class HomeModule {}
