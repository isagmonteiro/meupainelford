import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {​​ Plugins, CameraResultType, CameraSource, CameraPhoto}​​ from '@capacitor/core';
import {​​ DomSanitizer, SafeResourceUrl }​​ from '@angular/platform-browser';
import {​​ HttpClient}​​ from '@angular/common/http';
import {​​ url }​​ from 'inspector';
import {​​ createTokenForExternalReference, createTokenForReference }​​ from '@angular/compiler/src/identifiers';
//import {​​ data }​​ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  photo:SafeResourceUrl;
  constructor(private router: Router, private sanitizer: DomSanitizer) { }
  async tirarfoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    //console.log(image);
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    console.log(this.photo);
    }

  Camera(){
    this.router.navigate(['/prediction']);

  }
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
