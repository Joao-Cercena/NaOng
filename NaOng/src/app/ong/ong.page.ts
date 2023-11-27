import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.page.html',
  styleUrls: ['./ong.page.scss'],
})
export class OngPage implements OnInit {
  nome: string = '';
  email: string = '';
  cnpj: string = '';
  endereco: string = '';
  pedido: string = '';
  idRecebido: any;

  constructor(private http: HttpClient, private navCtrl: NavController, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idRecebido = params['id'];
      console.log(this.idRecebido);
    });
  }

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
  showHome() {
    this.navCtrl.navigateBack('home')
  }

  cadastrar() {
    const novoOng = {
      nome: this.nome,
      email: this.email,
      cnpj: this.cnpj.replace(/\D/g, ''), // Remove caracteres não numéricos do CPF
      endereco: this.endereco,
      pedido: this.pedido,
    };

    // Envia os dados para o servidor JSON
    this.http.post('http://localhost:3000/ong', novoOng).subscribe(
      (data) => {
        console.log('Ong cadastrado com sucesso:', data);
        this.navCtrl.navigateBack('home'); // Redireciona para a página 'home' após o cadastro
      },
      (error) => {
        console.error('Erro ao cadastrar Ong:', error);
      }
    );
  }
}

