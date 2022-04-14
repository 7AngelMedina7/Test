import { Component, OnInit, ViewChild } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  constructor(private modoNoche: DarkModeService) { }
  nightModeisOn:boolean;
  ngOnInit() {
    this.nightModeisOn=this.modoNoche.darkMode;
    console.log(this.nightModeisOn)
    console.log(this.modoNoche.darkMode);
  }
}
