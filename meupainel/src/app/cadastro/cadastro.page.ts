import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})


export class CadastroPage implements OnInit {

  constructor(private router: Router) { }
  confcad(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/confcad']);
  }
  ngOnInit() {
  }

}


