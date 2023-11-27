import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doador',
  templateUrl: './doador.page.html',
  styleUrls: ['./doador.page.scss'],
})
export class DoadorPage {
  nome: string = '';
  email: string = '';
  dataNascimento: string = '';
  cpf: string = '';
  senha: string = '';
  cpfMask: string = '';
  listDoador: any = [];
  idRecebido: any;
  mestre: any;

  constructor(private http: HttpClient, private navCtrl: NavController, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idRecebido = params['id'];
      console.log(this.idRecebido);
    });
    this.http.get<any>('http://localhost:3000/doador').subscribe(
      (data) => {
        // Verifica se as credenciais correspondem a algum usuário
        const foundUser = data.find((user: any) => {
          return user.id == this.idRecebido;
        });
        this.mestre = foundUser.mestre;
      },
      (error) => {
        // Tratamento de erro caso a solicitação não seja bem-sucedida
        console.error('Erro ao buscar usuários:', error);
      }
    );
  }

  formatarCPF() {
    let cpfSemFormatacao = this.cpf.replace(/\D/g, '');
    this.cpf = cpfSemFormatacao.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
  }

  showHome() {
    this.navCtrl.navigateBack('home')
  }

  ionViewWillEnter() {
    this.listar();
  }

  listar() {
    // Envia os dados para o servidor JSON
    this.http.get('http://localhost:3000/doador').subscribe(
      (data) => {
        this.listDoador = data;
      },
      (error) => {
        console.error('Erro ao buscar doador:', error);
      }
    );
  }

  cadastrar() {
    const novoDoador = {
      nome: this.nome,
      cpf: this.cpf.replace(/\D/g, ''), // Remove caracteres não numéricos do CPF
      email: this.email,
      dataNascimento: this.dataNascimento,
      senha: this.senha,
    };

    // Envia os dados para o servidor JSON
    this.http.post('http://localhost:3000/doador', novoDoador).subscribe(
      (data) => {
        console.log('Doador cadastrado com sucesso:', data);
        this.navCtrl.navigateBack('home'); // Redireciona para a página 'home' após o cadastro
      },
      (error) => {
        console.error('Erro ao cadastrar doador:', error);
      }
    );
  }
}
