import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectContainerComponent } from './project-container.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectComponent } from '../project/project.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectContainerComponent', () => {
  let component: ProjectContainerComponent;
  let fixture: ComponentFixture<ProjectContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectContainerComponent, ProjectComponent ],
      imports: [ MatCardModule, RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
