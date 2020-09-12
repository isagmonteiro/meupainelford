import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-confcad',
  templateUrl: './confcad.page.html',
  styleUrls: ['./confcad.page.scss'],
})
export class ConfcadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  menu(){
    this.router.navigate(['/menu']);
  }

}
