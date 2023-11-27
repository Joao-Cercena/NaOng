import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idRecebido: any;
  mestre: any;
  listOng: any = [];

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient,) {
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
  };


  showDoador() {
    this.router.navigate(['doador'], {
      queryParams: { id: this.idRecebido },
      relativeTo: this.activatedRoute.parent
    });
  }
  showOng() {
    this.router.navigate(['ong'], {
      queryParams: { id: this.idRecebido },
      relativeTo: this.activatedRoute.parent
    });
  }
  showRegistro() {
    this.router.navigate(['registro'], {
      queryParams: { id: this.idRecebido },
      relativeTo: this.activatedRoute.parent
    });
  }

  ionViewWillEnter() {
    this.listar();
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
