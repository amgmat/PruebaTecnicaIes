import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-fecha',
  templateUrl: './calcular-fecha.component.html',
  styleUrls: ['./calcular-fecha.component.css']
})
export class CalcularFechaComponent implements OnInit {

  calculaForm:FormGroup= this.fb.group({
    fecha:['',[Validators.required]],
    unidad:[ '',[Validators.required]],
    cantidad:[ , [Validators.required]],
  });

  unidades=[
    {nombre: 'Dias'},
    {nombre: 'Meses'},
    {nombre: 'Años'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  calcular(){
    console.log(this.calculaForm.value)
  }

}
