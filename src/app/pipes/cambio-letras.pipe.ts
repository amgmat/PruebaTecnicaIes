import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(nombre:string): string {
    let nuevoarregloNombre=[];
    const arregloNombre = nombre.toLocaleLowerCase().split('');

  for(let letra of arregloNombre){
      if(letra == 'a'){
        nuevoarregloNombre.push('4')
      }else if(letra == 'e'){
        nuevoarregloNombre.push('3')
      }else if(letra == 'i'){
        nuevoarregloNombre.push('1')
      }else if(letra == 'o'){
        nuevoarregloNombre.push('0')
      }else if(letra == 'u'){
        nuevoarregloNombre.push('9')
      }else{
        nuevoarregloNombre.push(letra)
      }    
    }    
    
    let nombreModificado = nuevoarregloNombre.join('');

    return nombreModificado;
  }

}
