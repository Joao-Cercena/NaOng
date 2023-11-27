import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  ong: number = 0;
  id_doador: number = 0;
  descricao: string = '';
  setor: string = '';
  data: string = '';
  listOng: any = [];
  idRecebido: any;
  valor: number = 0.0;

  constructor(private http: HttpClient, private navCtrl: NavController, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idRecebido = params['id'];
      console.log(this.idRecebido);
    });
  }

  ionViewWillEnter() {
    this.listar();
  }

  showHome() {
    this.navCtrl.navigateBack('home')
  }

  cadastrar() {
    const novoRegistro = {
      ong: this.ong,
      id_doador: this.idRecebido,
      descricao: this.descricao,
      setor: this.setor,
      data: this.data,
      valor: this.valor,
    };
    console.log(this.idRecebido)

    // Envia os dados para o servidor JSON
    this.http.post('http://localhost:3000/registro', novoRegistro).subscribe(
      (data) => {
        console.log('Registro cadastrado com sucesso:', data);
        this.navCtrl.navigateBack('home'); // Redireciona para a página 'home' após o cadastro
      },
      (error) => {
        console.error('Erro ao cadastrar registro:', error);
      }
    );
  }
  listar() {
    // Envia os dados para o servidor JSON
    this.http.get('http://localhost:3000/ong').subscribe(
      (data) => {
        this.listOng = data;
      },
      (error) => {
        console.error('Erro ao buscar ong:', error);
      }
    );
  }

}

