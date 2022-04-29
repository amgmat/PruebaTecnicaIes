import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcular-fecha',
  templateUrl: './calcular-fecha.component.html',
  styleUrls: ['./calcular-fecha.component.css']
})
export class CalcularFechaComponent implements OnInit {

  fechaDinamica:any;

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
    if(this.calculaForm.invalid)return;
    const {fecha, unidad, cantidad} = this.calculaForm.value;

    let formatoFecha = new Date(fecha);
    let dia = formatoFecha.getDate();
    let mes = formatoFecha.getMonth();
    let year = formatoFecha.getFullYear();
    // console.log({dia,mes,year})
    
    // let nuevaFecha;

    if(unidad.nombre == 'Años'){
      this.fechaDinamica = new Date(year+cantidad, mes, dia);
    }else if(unidad.nombre == 'Meses'){
      this.fechaDinamica = new Date(year,mes+cantidad,dia);
    }else{
      this.fechaDinamica = new Date(year,mes,dia+cantidad);
    }

  }

}
