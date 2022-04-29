import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-pagina-bienvenida',
  templateUrl: './pagina-bienvenida.component.html',
  styleUrls: ['./pagina-bienvenida.component.css']
})
export class PaginaBienvenidaComponent implements OnInit {

  get nombre(){
    return this.modalService.nombre;
  }

  constructor(public dialog: MatDialog,
              public modalService:ModalService        
    ) { }

  
  ngOnInit(): void {
  }
  openDialog() {
    console.log('abriendo modal');
    this.dialog.open(ModalComponent,
      {
        width: '300px',
      });

      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      //   this.nombre = result;
      //   console.log(result);
      // });
  }



}
