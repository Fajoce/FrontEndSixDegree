import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent {
  id!:number;
  user!: Usuarios;
  user$! :Observable<Usuarios>;
constructor(private userservice: UsuarioService,
  private activatedRoute: ActivatedRoute){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
}

ngOnInit(){
 //this.getInspectionById();
 this.user$ = this.userservice.getUsersById(this.id);
}
getUsersById(){
 /* return this.inspectiontypeservice.getInspectionTypebyId(this.id).subscribe(data=>{
    this.inspeccion = data;
  })*/
  }
}
