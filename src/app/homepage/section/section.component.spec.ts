import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComponent ],
      imports: [ MatCardModule, RouterTestingModule.withRoutes([]), FontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
