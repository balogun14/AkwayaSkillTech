import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SectionWhatYouWillLearnComponent } from './section-what-you-will-learn/section-what-you-will-learn.component';
import { SectionPastStudentsComponent } from './section-past-students/section-past-students.component';
import { OurMentorComponent } from './our-mentor/our-mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    SectionWhatYouWillLearnComponent,
    SectionPastStudentsComponent,
    OurMentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
