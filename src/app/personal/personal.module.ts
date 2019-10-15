import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogContainerComponent } from './blog-container/blog-container.component';
import { Routes, RouterModule } from '@angular/router';

const personalRoutes: Routes = [
  { path: '', component: BlogContainerComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [BlogComponent, BlogContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(personalRoutes)
  ]
})
export class PersonalModule { }
