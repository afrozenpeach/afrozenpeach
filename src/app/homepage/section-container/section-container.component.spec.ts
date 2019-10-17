import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContainerComponent } from './section-container.component';
import { MatCardModule } from '@angular/material';
import { SectionComponent } from '../section/section.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SectionContainerComponent', () => {
  let component: SectionContainerComponent;
  let fixture: ComponentFixture<SectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionContainerComponent, SectionComponent ],
      imports: [ MatCardModule, RouterTestingModule.withRoutes([]), FontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
