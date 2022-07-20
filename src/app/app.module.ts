import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LessonSixComponent } from './lesson-six/lesson-six.component';
import { LessonsixixissasComponent } from './lessonsixixissas/lessonsixixissas.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonSixComponent,
    LessonsixixissasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
