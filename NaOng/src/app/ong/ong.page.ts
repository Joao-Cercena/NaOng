import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.page.html',
  styleUrls: ['./ong.page.scss'],
})
export class OngPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showHome(){
    this.navCtrl.navigateBack('home')
  }
}

