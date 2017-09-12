import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.handlerNotifications();
    });
  }

  private handlerNotifications(){
    // code
    this.oneSignal.startInit('d2f355be-5653-4ee4-a467-97f5432ed8f8','143728972842');
    this.oneSignal.handleNotificationOpened()
    .subscribe(jsonData => {
    	let alert = this.alertCtrl.create({
    		title: jsonData.notification.payload.title,
      		subTitle: jsonData.notification.payload.body,
     		 buttons: ['OK']
    	});
    	alert.present();
    	console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
    this.oneSignal.endInit();
  }
}
