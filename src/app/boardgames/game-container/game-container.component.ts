import { Component, OnInit } from '@angular/core';
import { Games, Game } from '../boardgames.types';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  games: Game[] = Games;

  constructor() { }

  ngOnInit() {
  }

}
