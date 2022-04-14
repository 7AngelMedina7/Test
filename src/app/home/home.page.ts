import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { group } from 'console';
import { Button } from 'protractor';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ionicForm: FormGroup;
  constructor(public router: Router, private formBuilder : FormBuilder, private modoNoche:DarkModeService ){
  }
  ngOnInit(): void {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    console.log(this.checkDarkMode);
    
  }
  checkDarkMode:boolean=this.modoNoche.darkMode
  darkMode(){
    this.modoNoche.changeMode()
  }
   iniciar(){
    if(this.ionicForm.valid){
      this.router.navigate(['/tabs/inicio'])
    }
    console.log(this.ionicForm.value)
  }
}
