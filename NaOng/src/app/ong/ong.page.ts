import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.page.html',
  styleUrls: ['./ong.page.scss'],
})
export class OngPage implements OnInit {
  nome: string = '';
  email: string = '';
  cnpj: string = '';
  setor: number = 0;
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  showHome(){
    this.navCtrl.navigateBack('home')
  }
}

