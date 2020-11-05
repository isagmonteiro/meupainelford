import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
