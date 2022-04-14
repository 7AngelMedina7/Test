import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() {

  }
  darkMode:boolean=false
  public changeMode(){
    this.darkMode = !this.darkMode
    console.log(this.darkMode)
    document.body.classList.toggle('body-dark')
  }
}
