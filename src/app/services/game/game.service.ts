import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GameService {
  _games: any;
  _games$ = new Subject<any>();;
  _jackpots: any;
  _jackpots$ = new Subject<any>();;

  constructor(private httpClient: HttpClient) { }

  getAvailableGames (): Observable<any> {
    return this.httpClient.get('/games.php').pipe(
      map((body: any) => {
        this.setAvailableGames(body);
        return body;
      })
    );
  }

  getGameJackpots() {
    return this.httpClient.get('/jackpots.php').pipe(
      map((body: any) => {
        this.setJackpots(body);
        return body;
      })
    );
  }

  private setAvailableGames(games?: any) {
    this._games = games || null;
    if (this._games) {
      this._games$.next(this._games);
    }
  }

  getGames(): Observable<any> {
    return this._games$.asObservable();
  }

  private setJackpots(jackpots?: any) {
    this._jackpots = jackpots || null;
    if (this._jackpots) {
      this._jackpots$.next(this._jackpots);
    }
  }

  getJackpots(): Observable<any> {
    return this._jackpots$.asObservable();
  }
}
