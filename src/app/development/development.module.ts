import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { Routes, RouterModule } from '@angular/router';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';


const developmentRoutes: Routes = [
  { path: '', component: ProjectContainerComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [ProjectComponent, ProjectContainerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(developmentRoutes)
  ]
})
export class DevelopmentModule { }
