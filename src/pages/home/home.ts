import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuData = [
    { title: 'Our Menu', pic:'assets/img/soup1.jpg', pushPgae: 'MenuPage'},
    { title: 'Account', pic:'assets/img/coffee-people3.jpg', pushPgae: 'AccountPage'},
    { title: 'About Us', pic:'assets/img/coffee6.jpg', pushPgae: 'AboutPage'},
    { title: 'Locations', pic:'assets/img/cafe2.jpg', pushPgae: 'LocationsPage'},
  ];

  constructor(public navCtrl: NavController) {

  }

}
