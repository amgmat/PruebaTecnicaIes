import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('valorNombre') valorNombre!:ElementRef<HTMLInputElement>;

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }

  asignarNombre(){
    this.modalService.nombre = this.valorNombre.nativeElement.value;
    // const nombre = this.valorNombre.nativeElement.value
    // console.log(nombre);
  }

  cerrarModal(){
    console.log('cerrar');
  }

}
