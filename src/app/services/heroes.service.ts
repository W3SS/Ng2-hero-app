import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable()
export class HeroesService {
  url:string;
  apikey:string;

  constructor ( ) {
    // https://gateway.marvel.com:443/v1/public/characters?apikey=b6ec14effa925965bd776af6a56b42d9
    this.url = 'https://gateway.marvel.com:443/v1/public/characters';
    this.apikey = 'b6ec14effa925965bd776af6a56b42d9';
  }

  getHeroById ( id ) {
    return axios.get(
      this.url + '/' + id,
      {
        params: {
          apikey: this.apikey
        }
      }
    )
  }

  getHeroesById ( ...args ) {
    const promises = args.map( id => {
      return this.getHeroById( id )
    } )

    return axios.all( promises );

  }

}
