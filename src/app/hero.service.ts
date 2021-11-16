import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Hero, HeroResp } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('Message from HeroService');
  //   return heroes;
  // }

  getHeroes(): Observable<HeroResp> {
    return this.http.get<HeroResp>(`http://localhost:5000/api/heroes`);
  }
}
