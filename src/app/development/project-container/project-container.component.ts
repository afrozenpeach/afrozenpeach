import { Component, OnInit } from '@angular/core';
import { Project, Projects } from '../project.types';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent implements OnInit {

  projects: Project[] = Projects;

  constructor() { }

  ngOnInit() {
  }

}
