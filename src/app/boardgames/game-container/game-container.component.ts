import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games, Game } from '../boardgames.types';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {

  games: Game[] = Games;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url: string) {
    if (url.startsWith("http")) {
      this.router.navigate(['/externalRedirect', { externalUrl: url }], {
        skipLocationChange: true,
      });
    } else {
      this.router.navigate([url]);
    }
    
    event.preventDefault();
  }

}
