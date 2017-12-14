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

  items: User[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,public service: ServiceProvider) {
    this.service.getAllUser()
    .subscribe(
      data => this.items = data,
      error => console.log(error)
    );
    console.log(this.navParams.data);
  }

  




  itemSelected(item: User) {
    console.log("Selected Item", item.name);
    this.navCtrl.push(DetailPage,item);
}

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
