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
  datafundacao: string = '';
  cnpj: string = '';
  endereco:string = '';
  bairro: string = '';
  cidade: string = '';  

  constructor(private navCtrl: NavController) { }

  formatarCnpj() {
    // Remove caracteres não numéricos do cnpj
    let cnpjSemFormatacao = this.cnpj.replace(/\D/g, '');
    // Aplica a máscara de cnpj
    this.cnpj = cnpjSemFormatacao.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
      '$1.$2.$3/$4-$5'
    );
  }
  ngOnInit() {
  }
  showHome(){
    this.navCtrl.navigateBack('home')
  }


  
  cadastrar() {
    console.log('Nome:', this.nome);
    console.log('Email:', this.cnpj);
    console.log('Email:', this.email);
    console.log('Idade:', this.datafundacao);
    console.log('endereco:', this.endereco);
    console.log('Bairro:', this.bairro);
    console.log('Cidade:', this.cidade);
  }
}

