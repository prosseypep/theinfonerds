import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovietalkPage } from './movietalk';

@NgModule({
  declarations: [
    MovietalkPage,
  ],
  imports: [
    IonicPageModule.forChild(MovietalkPage),
  ],
})
export class MovietalkPageModule {}
