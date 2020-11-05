import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-assistencia',
  templateUrl: './assistencia.page.html',
  styleUrls: ['./assistencia.page.scss'],
})
export class AssistenciaPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    private alertController: AlertController

  ) { }

  ngOnInit() {
  }



  callNow(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'FORD SP',
      subHeader: 'Rua Tavares Gaci, 130',
      message: 'Contato: (11) 1234-4559',
      buttons: ['Ligar','Cancelar'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'FORD MG',
      subHeader: 'Rua Minas, 210',
      message: 'Contato: (31) 4324-5459',
      buttons: ['Ligar','Cancelar'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
