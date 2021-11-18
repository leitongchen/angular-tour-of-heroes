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

  heroes: Hero[] = []; 
  selectedHero: any; 

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

  delete(event: Event): void {
    console.log(`Delete è stato triggerato correttamente: ${event}`)

    if (event) {
      this.heroes = this.heroes.filter(h => h !== this.selectedHero);
      this.heroService.deleteHero(this.selectedHero.id).subscribe();
      this.selectedHero = null; 
    } else {
      this.selectedHero = null; 
      return; 
    }
  }

  onDeleteBtn(event: Event, hero: Hero) {
    event.stopPropagation();
    this.selectedHero = hero;
  }

}
