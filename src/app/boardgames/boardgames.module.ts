import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { Routes, RouterModule } from '@angular/router';
import { GameContainerComponent } from './game-container/game-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const boardgameRoutes: Routes = [
  { path: '', component: GameContainerComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [GameComponent, GameContainerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(boardgameRoutes)
  ]
})
export class BoardgamesModule { }
