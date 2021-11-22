import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; 
  selectedHero: Hero; 

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe({
        next: resp => {
          this.heroes = resp;
        },
        error: err => console.log(`Something wrong occurred: ${err}`),
        complete: () => console.log('Operation completed')
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(shouldDelete: boolean): void {
    if (shouldDelete) {
      this.heroes = this.heroes.filter(h => h !== this.selectedHero);
      this.heroService.deleteHero(this.selectedHero.id).subscribe();
    } 
    this.selectedHero = null; 
  }

  onDeleteBtn(event: Event, hero: Hero) {
    event.stopPropagation();
    this.selectedHero = hero;
  }

}
