import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameContainerComponent } from './game-container.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { GameComponent } from '../game/game.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameContainerComponent', () => {
  let component: GameContainerComponent;
  let fixture: ComponentFixture<GameContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GameContainerComponent, GameComponent ],
      imports: [ MatCardModule, RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
