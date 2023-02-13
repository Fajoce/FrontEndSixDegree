import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-detalle-usuarios-limitado',
  templateUrl: './detalle-usuarios-limitado.component.html',
  styleUrls: ['./detalle-usuarios-limitado.component.css']
})
export class DetalleUsuariosLimitadoComponent {
  name!:string;
  user!: Usuarios;
  user$! :Observable<Usuarios>;
constructor(private userservice: UsuarioService,
  private activatedRoute: ActivatedRoute){
    this.name = String(this.activatedRoute.snapshot.paramMap.get('name'));
}

ngOnInit(){
 //this.getInspectionById();
 this.user$ = this.userservice.getUsersName(this.name);
}
getUsersById(){
 /* return this.inspectiontypeservice.getInspectionTypebyId(this.id).subscribe(data=>{
    this.inspeccion = data;
  })*/
  }
}
