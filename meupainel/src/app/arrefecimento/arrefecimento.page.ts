import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VideoPlayer } from '@ionic-native/video-player/ngx';



@Component({
  selector: 'app-arrefecimento',
  templateUrl: './arrefecimento.page.html',
  styleUrls: ['./arrefecimento.page.scss'],
  
})
export class ArrefecimentoPage implements OnInit {
  
 

  constructor(
    private router: Router,
   
    ) { }

  ngOnInit() {
  }

}
