import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean = true;
  loading:boolean = false;

  loginForm:FormGroup= this.fb.group({
    username: ['',[Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
      private fb:FormBuilder,
      private authService:AuthService,
      private router:Router
    ) {

   }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.invalid)return;
    this.loading = true;
    Swal.fire({
      title: 'Espere un momento por favor!',
      didOpen: () => {
        Swal.showLoading()
      }});
    const {username, password} = this.loginForm.value;
    this.authService.login(username,password)
    .subscribe(resp=>{
      Swal.close();
      if(resp===true){
        this.router.navigateByUrl('');
        this.loading = false;
      }else{
        console.warn(resp);
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: resp,
        })
      }
    })

  }

}
