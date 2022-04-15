import { Component, OnInit, ViewChild } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  constructor(private modoNoche: DarkModeService, private locationService: LocationService) { }
  nightModeisOn:boolean;
  ngOnInit() {
    this.nightModeisOn=this.modoNoche.darkMode;
    console.log(this.nightModeisOn)
    console.log(this.modoNoche.darkMode);
    this.getLocation()
  }
  lati
  long
  getLocation() {
    this.locationService.getPosition().then(pos => {
        this.lati = pos.lat;
        this.long = pos.lng;
        console.log(this.lati, this.long);
        
    });
}
}
