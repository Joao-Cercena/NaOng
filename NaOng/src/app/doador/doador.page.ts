import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doador',
  templateUrl: './doador.page.html',
  styleUrls: ['./doador.page.scss'],
})
export class DoadorPage implements OnInit {
  nome: string = '';
  email: string = '';
  dataNascimento: string = '';
  cpf: string = '';
  
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }
  showHome(){
    this.navCtrl.navigateBack('home')
  }

  cadastrar() {
    console.log('Nome:', this.nome);
    console.log('Email:', this.cpf);
    console.log('Email:', this.email);
    console.log('Idade:', this.dataNascimento);
  }
}
