import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { IonicStorageModule } from '@ionic/storage';
import { RewardServiceProvider } from '../providers/reward-service/reward-service';
import { RewardModalPageModule } from "../pages/reward-modal/reward-modal.module";
import { MenuServiceProvider } from '../providers/menu-service/menu-service';

//import { FCM } from '@ionic-native/fcm';

export const firebaseConfig = {
    apiKey: "AIzaSyCWhlZGS5W1UuC6VV0mQzQJeYqYugfE4FE",
    authDomain: "wired-coffee-614a1.firebaseapp.com",
    databaseURL: "https://wired-coffee-614a1.firebaseio.com",
    projectId: "wired-coffee-614a1",
    storageBucket: "wired-coffee-614a1.appspot.com",
    messagingSenderId: "952708302087"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    RewardModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    RewardServiceProvider,
    MenuServiceProvider
  ]
})
export class AppModule {}
