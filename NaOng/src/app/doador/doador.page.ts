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
  cpfMask: string = ''; 
  
  constructor(private navCtrl: NavController) {}

  formatarCPF() {
    // Remove caracteres não numéricos do CPF
    let cpfSemFormatacao = this.cpf.replace(/\D/g, '');

    // Aplica a máscara de CPF
    this.cpf = cpfSemFormatacao.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
      '$1.$2.$3-$4'
    );
  }

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
