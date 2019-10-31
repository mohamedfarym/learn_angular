import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  chosenHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getFriends();
  }

  onChosen(hero: Hero): void {
    this.chosenHero = hero;
  }

  getFriends(): void {
    this.heroService.getFriends()
      .subscribe(heroes => this.heroes = heroes);
  }

}
