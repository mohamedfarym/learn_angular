import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getFriends(): Observable<Hero[]> {
    this.messageService.add('HeroService: assembled heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) {
  }
}
