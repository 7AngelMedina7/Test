import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { group } from 'console';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  estaActivado=false;
  darkMode:boolean= false;
  ionicForm: FormGroup;
  constructor(public router: Router, private formBuilder : FormBuilder){
  }
  ngOnInit(): void {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
  
  cambio(){
    this.darkMode = !this.darkMode
    console.log(this.darkMode)
    document.body.classList.toggle('body-dark')
  }
  iniciar(){
    if(this.ionicForm.valid){
      this.router.navigate(['/pagina'])
    }
    console.log(this.ionicForm.value)
  }
}
