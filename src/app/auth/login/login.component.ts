import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean = true;

  loginForm:FormGroup= this.fb.group({
    username: ['',[Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
      private fb:FormBuilder,
      private router:Router
    ) {

   }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.invalid)return;
    console.log(this.loginForm.value);

    this.router.navigateByUrl('bienvenidos');

  }

}
