import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public brand:string = 'HeroApppp';
  routerLinks:any[] = [
    {
      link: 'home',
      title: 'Home'
    },
    {
      link: 'about',
      title: 'About'
    },
    {
      link: 'heroes',
      title: 'Heroes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
