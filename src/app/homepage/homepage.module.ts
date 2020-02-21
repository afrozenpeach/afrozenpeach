import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SectionContainerComponent } from './section-container/section-container.component';
import { SectionComponent } from './section/section.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const homepageRoutes: Routes = [
  { path: '', component: SectionContainerComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    SectionContainerComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule.forChild(homepageRoutes)
  ]
})
export class HomepageModule { }
