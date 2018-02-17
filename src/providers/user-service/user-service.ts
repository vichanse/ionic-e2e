import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AlertController } from 'ionic-angular';


@Injectable()
export class UserServiceProvider {

  constructor(private afAuth: AngularFireAuth, public alertCtrl: AlertController) {
    
  }

  displayAlert(alertTitle, alertSub) {
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }

  logOut() {
    //this.storageControl('delete');
    this.afAuth.auth.signOut()
      .then(LoggedOut => this.displayAlert('Logged out', 'Comme back and visit soon'))
      .catch(err => this.displayAlert('Error logging out', err))
  }

}
