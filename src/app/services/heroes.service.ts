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

  getHeroesById ( ...args ):Promise<any> {
    let promesa = new Promise( ( resolve, reject ) => {

      const promises = args.map( id => {
        return this.getHeroById( id )
      } );

      let heroes = [];

      axios.all( promises ).then( responses => {
        heroes = responses.map( response => {
          if ( response.status === 200 ) {
            let {
              id,
              name,
              description,
              modified,
              thumbnail
            } = response.data.data.results[ 0 ];
            
            return {
              id,
              name,
              description,
              modified,
              thumbnail
            };
          }
        } );

        resolve( heroes );
      } );

    } );

    return promesa;

  }

}
