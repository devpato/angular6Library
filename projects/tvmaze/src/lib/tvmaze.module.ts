import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
  ],
  declarations: [TvmazeComponent, PosterComponent],
  exports: [TvmazeComponent]
})
export class TvmazeModule { }
