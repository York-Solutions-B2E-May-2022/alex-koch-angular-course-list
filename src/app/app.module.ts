import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { courseReducer } from './store/reducers/course.reducer';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// issue ecnountered in forRoot solution: https://stackoverflow.com/questions/66165872/types-of-parameters-action-and-action-are-incompatible-property-payload-i
