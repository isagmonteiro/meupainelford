import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }
  Info(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/info']);
  }
  Tutoriais(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/tutoriais']);
  }
  Assistencia(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/assistencia']);
  }
  Manual(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/manual']);
  }
  Configuracao(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/configuracao']);
  }
  ngOnInit() {
  }

}
