import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from "../home/home";


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  reg = {
    email: '',
    passWrd1: '',
    passWrd2: '',
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  displayAlert(alertTitle, alertSub) {
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }

  registerAccount() {
    if (this.reg.passWrd1 != this.reg.passWrd2) {
      this.displayAlert('Password Problem!', 'Passwords do not match, please try again.');
      this.reg.passWrd1 = '';
      this.reg.passWrd2 = '';
    } else {
      this.afAuth.auth.createUserWithEmailAndPassword(this.reg.email, this.reg.passWrd1)
        .then(res => this.regSuccess(res))
        .catch(err => this.displayAlert('Error', err));
    }
      
  }

  regSuccess(result) {
    this.displayAlert(result.email, 'Account creater for this email address');
    this.afAuth.auth.signInWithEmailAndPassword(this.reg.email, this.reg.passWrd1)
      .then(res => this.navCtrl.push(HomePage))
      .catch(err => this.displayAlert('Error!', err));
  }

}
