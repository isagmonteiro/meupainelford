import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  gologin(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/login']);
  }
  gocadastro(){
    this.router.navigate(['/cadastro']);
  }
}

