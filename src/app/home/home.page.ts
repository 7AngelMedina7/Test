import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  saludar(){
    alert("good")
  }
  constructor(public router: Router){

  }
  user={
    name: new FormControl('', Validators.required) ,
    password: new FormControl('', Validators.required)
  }
  iniciar(){
    console.log(this.user)
    this.router.navigate(['/pagina'])
  }
}
