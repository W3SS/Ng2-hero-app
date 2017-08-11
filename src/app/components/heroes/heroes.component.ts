import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = [];

  constructor( private heroesService: HeroesService ) {
    /*
      1009610 => spider-man
      1009368 => iron-man
      1009718 => Wolverine
      1009351 => Hulk
      1009262 => Daredevil
      1009629 => Storm
      1010743 => Groot
      1009664 => Thor
      1009465 => Mystique
    */
    heroesService
      .getHeroesById(
        '1009610 ', '1009368', '1009718',
        '1009351', '1009262', '1009629',
        '1010743', '1009664', '1009465' )
      .then( response  => {
        this.heroes = response;
      } );
  }

  ngOnInit() {
  }

}
