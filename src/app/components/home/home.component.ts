import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/services/form/my-error-state-matcher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();

  _games: Array<any>;
  processing: boolean;
  _jackpots: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
    this.getJackpots();
  }

  private getGames() {
    this.processing = true;
    this.gameService.getAvailableGames().subscribe(data => {
      if (data && typeof data !== 'undefined') { 
        this._games = data;
      }
      this.processing = false;
    });
  }

  getJackpots() {
    this.processing = true;
    this.gameService.getGameJackpots().subscribe(data => {
      if (data && typeof data !== 'undefined') { 
        this._jackpots = data;
      }
      this.processing = false;
    });
  }
}
