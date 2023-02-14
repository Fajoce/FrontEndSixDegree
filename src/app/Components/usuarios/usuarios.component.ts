import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/service/usuario.service';

const users: Usuarios[] = [];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['userId', 'userName','userAdress','acciones'];
  dataSource = new MatTableDataSource<Usuarios>(users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userservice: UsuarioService){}

  getAllUsers(){
    this.userservice.getUsers().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }
  ngOnInit(){
    this.getAllUsers();
    }

    deleteUsers(id:number){
      return this.userservice.deleteusers(id).subscribe(data=>{
       /*this.toast.success('Registro eliminado satisfactoriamente!');*/
       alert('Registro ' + id + ' eliminado con exito')
      this.getAllUsers();
      })
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
}
