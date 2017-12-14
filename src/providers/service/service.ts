import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../app/model';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  private items: User[];

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getItems(): User[] {
   this.items = [
    {id:1,name:'Pokémon',prenom:'Yellow', adr:'region kanto',tel:'0254862',email:'pokemonYellow@poke.fr',image:'../../assets/imgs/pokemon.jpg'},
    {id:2,name:'Super',prenom:'Mario',adr:'Galaxy etoiles',tel:'4584126',email:'superMario@mitendo.gr',image:'../../assets/imgs/mario.jpg'},
    {id:3,name:'Pac',prenom:'Man',adr:'labirynthe fantome',tel:'5147852',email:'pacman@jeu.ku',image:'../../assets/imgs/pacman.jpg'}
  ];
  return this.items;
  }

}
