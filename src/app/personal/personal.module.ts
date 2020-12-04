import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogContainerComponent } from './blog-container/blog-container.component';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const personalRoutes: Routes = [
  { path: '', component: BlogContainerComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [BlogComponent, BlogContainerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(personalRoutes)
  ]
})
export class PersonalModule { }
