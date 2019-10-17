import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContainerComponent } from './blog-container.component';
import { MatCardModule } from '@angular/material';
import { BlogComponent } from '../blog/blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('BlogContainerComponent', () => {
  let component: BlogContainerComponent;
  let fixture: ComponentFixture<BlogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogContainerComponent, BlogComponent ],
      imports: [ MatCardModule, RouterTestingModule.withRoutes([]), FontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
