import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController
    ) {}


  showDoador() {
    this.navCtrl.navigateForward('doador')
  }
  showOng() {
    this.navCtrl.navigateForward('ong')
  }
  showSetor() {
    this.navCtrl.navigateForward('setor')
  }


}
