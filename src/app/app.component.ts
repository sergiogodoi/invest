import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    /*{
      title: 'List',
      url: '/list',
      icon: 'list'
    },*/
    {
      title: 'Renda Fixa',
      url: '/fixa',
      icon: 'help-circle'
    },
    {
      title: 'Renda Variável',
      url: '/variavel',
      icon: 'help-circle'
    },
    {
      title: 'Tesouro Direto',
      url: '/tesouro',
      icon: 'help-circle'
    },
    {
      title: 'CDB',
      url: '/cdb',
      icon: 'help-circle'
    },
    {
      title: 'LCI e LCA',
      url: '/letra-credito',
      icon: 'help-circle'
    },
    {
      title: 'Calculadora',
      url: '/calc',
      icon: 'calculator'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
