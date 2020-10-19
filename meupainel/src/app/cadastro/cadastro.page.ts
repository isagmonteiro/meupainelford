import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'firebase';
import { registerLocaleData } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'], 
})


export class CadastroPage implements OnInit {
  private loading: any;
  public userRegister: User = {};

  constructor(private router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private afs: AngularFirestore,
    ) { }

  ngOnInit() { }

  async register() {
    console.log(this.userRegister);
    await this.presentLoading(); 
    

    try {
      const newUser = await this.authService.register(this.userRegister);
      await this.afs.collection('Users').doc(newUser.user.uid).set(this.userRegister);
      this.router.navigate(['/confcad']);
    } catch (error) { 
      
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor, aguarde...'
    });
    return this.loading.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
 
  }

}

