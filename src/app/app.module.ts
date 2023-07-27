import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionWhatYouWillLearnComponent } from './section-what-you-will-learn/section-what-you-will-learn.component';
import { SectionPastStudentsComponent } from './section-past-students/section-past-students.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionWhatYouWillLearnComponent,
    SectionPastStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
