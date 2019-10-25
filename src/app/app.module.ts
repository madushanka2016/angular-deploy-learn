import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MainGrilComponent } from './main-gril/main-gril.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGrilComponent,
    HomeComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'education' , component: EducationComponent },
      { path: 'skill' , component: SkillComponent },
      { path: 'project' , component: ProjectComponent },
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
