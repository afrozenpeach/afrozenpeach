import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SectionContainerComponent } from './section-container/section-container.component';
import { SectionComponent } from './section/section.component';

import { 
  MatCardModule,
  MatButtonModule
} from '@angular/material';

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
    RouterModule.forChild(homepageRoutes)
  ]
})
export class HomepageModule { }
