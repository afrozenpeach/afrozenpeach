import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { Routes, RouterModule } from '@angular/router';

const libraryScienceRoutes: Routes = [
  { path: '', component: ProjectContainerComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [ProjectComponent, ProjectContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(libraryScienceRoutes)
  ]
})
export class LibraryScienceModule { }
