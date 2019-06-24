import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentbarComponent } from './contentbar/contentbar.component';
import { PostwrapperComponent } from './postwrapper/postwrapper.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { WatchlistComponent } from '../features/watchlist/watchlist.component';

@NgModule({
  declarations: [ContentbarComponent, PostwrapperComponent, TitlebarComponent, WatchlistComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
