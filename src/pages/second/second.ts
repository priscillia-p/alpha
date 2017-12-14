import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/model';
import { DetailPage } from '../detail/detail';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items: User[] = [
    {id:1,name:'Pokémon',prenom:'Yellow', adr:'region kanto',tel:'0254862',email:'pokemonYellow@poke.fr',image:'../../assets/imgs/pokemon.jpg'},
    {id:2,name:'Super',prenom:'Mario',adr:'Galaxy etoiles',tel:'4584126',email:'superMario@mitendo.gr',image:'../../assets/imgs/mario.jpg'},
    {id:3,name:'Pac',prenom:'Man',adr:'labirynthe fantome',tel:'5147852',email:'pacman@jeu.ku',image:'../../assets/imgs/pacman.jpg'}
  ];




  itemSelected(item: User) {
    console.log("Selected Item", item.name);
    this.navCtrl.push(DetailPage,item);
}

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
