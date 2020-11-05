import { Component, OnInit } from '@angular/core';
import {​​ Router }​​ from '@angular/router';
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.page.html',
  styleUrls: ['./prediction.page.scss'],
})
export class PredictionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  voltar(){
    this.router.navigate(['/menu']);
  }
  Assistencia(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/assistencia']);
  }
  Arrefecimento(){
    //colocar código pra loggar o usuário
    this.router.navigate(['/arrefecimento']);
  }
}
