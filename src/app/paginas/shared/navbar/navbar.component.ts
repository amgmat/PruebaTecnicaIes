import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  itemNav = [
    {
      nombre: "Bienvenida",
      link: "/bienvenida",
    },
    {
      nombre: "Conversiones",
      link: "/conversiones",
    },
    {
      nombre: "Calcula-Fecha",
      link: "/calcula-fecha",
    },
    {
      nombre: "Formulario",
      link: "/formulario",
    },
  ]

  constructor(
              private router:Router,
              private authService:AuthService
             ) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/login');
    this.authService.logout();
  }

}
