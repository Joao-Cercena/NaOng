import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private navCtrl: NavController) {}

  login() {
    // Verifica se as credenciais estão corretas (simulação)
    if (this.username === 'usuario' && this.password === 'senha') {
      // Caso correto, redireciona para a próxima página
      this.router.navigate(['/outra-pagina']);
    } else {
      // Caso contrário, exibe uma mensagem de erro (pode ser um alert, toast, etc.)
      console.log('Credenciais inválidas');
    }
  }
  showHome(){
    this.navCtrl.navigateBack('home')
  }
}

