import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.page.html',
  styleUrls: ['./setor.page.scss'],
})
export class SetorPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showHome(){
    this.navCtrl.navigateBack('home')
  }
}