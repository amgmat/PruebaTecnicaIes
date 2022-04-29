import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EstadoCivilService } from '../../services/estado-civil.service';
import { Result } from '../../interfaces/catologo.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit,OnDestroy {

  catalogo!:Subscription;
  items!:Result[];

  form:FormGroup = this.fb.group({
    nombres: new FormControl('',[Validators.required, this.sinEspacios]),
    apellidos: new FormControl('',[Validators.required, this.sinEspacios]),
    fumas: new FormControl( '', [Validators.required]),
    actualmentePracticasLectura: new FormControl('', [Validators.required]),
    librosLeidos: new FormArray( [],[Validators.required] ), 
    estadoCivil:new FormControl('')
  });

  nuevoLibro:FormControl = new FormControl('',Validators.required)

  get practicasLectura():boolean{
    return this.form.get('actualmentePracticasLectura')!.value;
  }

  librosArreglo(){
    return this.form.get('librosLeidos') as FormArray;
  }

  get arrayDisabled(){
    return (this.practicasLectura)?this.librosArreglo().enable():this.librosArreglo().disable();
  }

  sinEspacios(control:FormControl):ValidationErrors|null{
    const valor:string = control.value;
    let valorArreglo = valor.split(' ')
    if(valorArreglo.includes('')){
      return {
        noEspacios: true
      }
    }

    return null;
  }
  
  constructor(
              private fb:FormBuilder,
              private estadoCivilService:EstadoCivilService
              ) { }
  
  ngOnInit(): void {
    this.catalogo= this.estadoCivilService.obtenerCatalogo()
    .subscribe(resp=>{
      // console.log(resp);
      this.items = resp;
    });
    this.arrayDisabled
  }

  ngOnDestroy(): void {
    this.catalogo.unsubscribe();
  }

  errorMsg(campo:string){
    const errors = this.form.get(campo)?.errors;
    if(errors?.['required']){
      return `Por favor ingresa tus ${campo}`;
    }else{
      return 'Por favor quita los espacios en blanco'
    }
  }
  
    
  agregarLibro(){
    if(this.nuevoLibro.invalid){
      return;
    }
    this.librosArreglo().push(this.fb.control(this.nuevoLibro.value,Validators.required));
    
    this.nuevoLibro.reset();
  }
  agregarLibroValido(i:number){
    return this.librosArreglo().controls[i].get('nuevoLibro')?.invalid
    && this.librosArreglo().controls[i].get('nuevoLibro')?.touched
  }

  borrar(index:number){
    this.librosArreglo().removeAt(index);
  }

  formularioEnviado(){
    
    if(this.form.invalid){
      this.form.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title:'Error',
        text:'El formulario no válido',
      })
    }else{
      console.log(this.form.value);
      Swal.fire({
        icon: 'success',
        title:'Válido',
        text:'El formulario es válido',
      })
    }
  }

}
