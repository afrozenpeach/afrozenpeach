import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionContainerComponent } from './section-container.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { SectionComponent } from '../section/section.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SectionContainerComponent', () => {
  let component: SectionContainerComponent;
  let fixture: ComponentFixture<SectionContainerComponent>;

  beforeEach(waitForAsync(() => {
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
