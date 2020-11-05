import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-tutoriais',
  templateUrl: './tutoriais.page.html',
  styleUrls: ['./tutoriais.page.scss'],
})
export class TutoriaisPage implements OnInit {


  constructor(private router: Router,
   
    ) { }

  ngOnInit() {
  }

  Arrefecimento(){
    this.router.navigate(['/arrefecimento']);

  }
}